# Kubernetes all the things

## Week 1

In this introductory week we will get our hands dirty with the basics around pods: Pods are the core components of a 
k8s cluster. If there is something running, it is running in a pod (or a job).

Here the list of the commands that we will run:

* `kubectl run hello --generator=run-pod/v1 --image speedwing/hello:latest`
* `kubectl get po`
  * Observe fields  
* `kubectl get po -o wide`
  * Observe pod ip, node ip
* `kubectl exec -it hello bash`
* `kubectl port-forward hello 8080`
* `kubectl logs -f hello`
* `kubectl get po hello -o yaml`
  * Metadata, spec, status
* `kubectl rm po hello`
* `kubectl run hello --generator=deployment/apps.v1beta1 --image speedwing/hello:latest`
* `kubectl get deploy`
  * Observe fields
* `kubectl scale --replicas=3 deploy/hello`
* `kubectl get po -w` 
