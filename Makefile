.PHONY: all week1 week2 week4 week6 npm-update

week1:
	cd Week1/hello; docker build -t speedwing/hello:v1 .; docker push speedwing/hello:v1


week2:
	cd Week2/hello-unhealthy; docker build -t speedwing/hello:v1-unhealthy .; docker push speedwing/hello:v1-unhealthy

week4:
	cd Week4/hello; docker build -t speedwing/hello:v2 .; docker push speedwing/hello:v2
	docker tag speedwing/hello:v2 speedwing/hello:latest; docker push speedwing/hello:latest

week6:
	cd Week6/web; docker build -t speedwing/ws1-web:v1 .; docker push speedwing/ws1-web:v1
	cd Week6/web; docker build -f Dockerfile-v2 -t speedwing/ws1-web:v2 .; docker push speedwing/ws1-web:v2
	cd Week6/login-v1; docker build -t speedwing/ws1-login:v1 .; docker push speedwing/ws1-login:v1
	cd Week6/login-v2; docker build -t speedwing/ws1-login:v2 .; docker push speedwing/ws1-login:v2

week7:
	cd Week7-Mesh/simple-app; docker build -t speedwing/ws2-simple-app:v1 .; docker push speedwing/ws2-simple-app:v1

npm-update:
	cd Week1/hello; npm update
	cd Week2/hello-unhealthy; npm update
	cd Week4/hello; npm update
	cd Week6/web; npm update
	cd Week6/login-v1; npm update
	cd Week6/login-v2; npm update

all: week1 week2 week4 week6 week7
