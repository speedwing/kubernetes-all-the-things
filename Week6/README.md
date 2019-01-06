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

### Deploy the monolitic app

The first exercise consist in deploying on your local kubernetes (on docker) the version 1 of the app.

The docker image of the app is: `nemo83/ws1-web:v1`

It's self contained app, it runs in node, and is accessible on port 8080. To run this locally you can issue: `docker run -p 8080:8080 nemo83/ws1-web:v1`

It will display a simple table with a log of the last 20 api calls to the login endpoint. A green entry is ok, a red means an error and the 
badge on the title of the column sums how many error within the last 20 calls.

### Breaking down the monolith

A new login service has now been developed and we can use it (and scale it) at wish.

The docker image is `nemo83/ws1-login:v1` and you can run it locally with `docker run -p 8080:8080 nemo83/ws1-login:v1` 
and just it the root path. It should just return a 200.

In order to use the login service, you also need to release `nemo83/ws1-web:v2`. The   

