# VirtualisationE5FI

docker run -P myapp pour lancer le docker

minikube start

Apply the deployment: 
    kubectl apply -f myapp-deployment.yml

Apply the node port service: 
    kubectl apply -f myapp-nodeport-service.yml

or

Apply the service of type loadbalancer: 
    kubectl apply -f myapp-loadbalancing-service.yml

Apply le fichier ingress en ayant installé le module au préalable
    kubectl apply -f ingress.yml

Puis :
minikube tunnel

enfin, via un navigateur :
http://myapp.info