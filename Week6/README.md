# Kubernetes workshop #1

Welcome to the first kubernetes workshop. In this workshop we will use all the key components and concepts of kubernetes

Before jumping into the hand-on phase, here a brief recap of the concept you should be familiar with before beginning:

* pod
* label
* deployment 
* service (NodePort)

## The app

We have a simple webapp that shows us the status of the only feature we have: the login. The v1 of this webapp is 
a bit monolitic-y and is self contained. The single page app will hit the backend and execute the login.

V2 of the app will introduce a login service and the webapp will make a remote call to it.

The login service gets then improved (let's say it now integrates with facebook), so a v2 of the login service is now
ready and can be deployed in prod... but something may go wrong ;-)

## The exercise 

There are multiple exercises, every following one introduces some complexity and study case.

### Deploy the monolitic app (Exercise 1)

The first exercise consist in deploying on your local kubernetes (on docker) the version 1 of the app.

The docker image of the app is: `nemo83/ws1-web:v1`

It's self contained app, it runs in node, and is accessible on port 8080. To run this locally you can issue: `docker run -p 8080:8080 nemo83/ws1-web:v1`

It will display a simple table with a log of the last 20 api calls to the login endpoint. A green entry is ok, a red means an error and the 
badge on the title of the column sums how many error within the last 20 calls.

The exercise:

* deploy the webapp in your local kubernetes on mac 
* create required resources so that you can browse locally w/o tunnels or port forward

### Breaking down the monolith (Exercise 2)

A new login service has now been developed and we can use it (and scale it) at wish.

The docker image is `nemo83/ws1-login:v1` and you can run it locally with `docker run -p 8080:8080 nemo83/ws1-login:v1` 
and just it the root path. It should just return a 200.

In order to use the login service, you also need to release `nemo83/ws1-web:v2`. Version 2 requires the URL of the login service.
The name of the service can be passed via the env var `LOGIN_API_HOST` and can be added in the Deployment spec. 
Please note that you do not need to specify the full URL, but just the service name.

The exercise:

* deploy the webapp and the login service 
* create required resources so that you can browse locally w/o tunnels or port forward

### Prepare a canary deployment (Exercise 3)
We know we will be releasing soon a new version and we don't want all the customers to hit the new version so we want to apply 
canary deployment. 

Create a new canary deployment and attach it behind the service so to have all the infrastructure to make a canary deployment. 

The exercise:

* complete the exercise 2
* create required resources to have both canary and production _deployments_ still pointing to login v1
* ensure pods from both deployments are actually used (you can check logs eg. kubectl logs -f pod_name) you will see 
a `calling login service` every time a login is requested

### Canary deployment (Exercise 4)

Let's assume that a new, improved, version of our login service is now available
and we want to roll it out via a canary-like style deployment. How would you do it?

Technically you should see some errors appearing (unless you've been really diligent in your solutions!) as soon as you
deploy the new version. What is going on? What do you think is happening and how could you fix it? You can of course 
check the code.

The docker image is: `nemo83/ws1-login:v2`

The exercise:

* complete the exercise 3
* ensure you're browsing the webapp and checking the status of the api calls to login service 
* now issue a new deployment on the canary deployment and point to login v2
  * now check your web app.. any errors?
  * roll back deployment
* investigate the issue by also checking the code (it's a very simple deployment complication)
* improve your kube configuration and issue a new deployment ensuring no errors are raised
