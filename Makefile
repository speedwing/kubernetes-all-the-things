.PHONY: all week1 week2 week4 week6

week1:
	cd Week1/hello; docker build -t nemo83/hello:latest .; docker push nemo83/hello:latest

week2:
	cd Week2/hello-unhealthy; docker build -t nemo83/hello-unhealthy:latest .; docker push nemo83/hello-unhealthy:latest

week4:
	cd Week4/hello; docker build -t nemo83/hello:v2 .; docker push nemo83/hello:v2

week6:
	cd Week6/web; docker build -t nemo83/ws1-web:v1 .; docker push nemo83/ws1-web:v1
	docker tag nemo83/ws1-web:v1 nemo83/ws1-web:v2
	docker push nemo83/ws1-web:v2
	cd Week6/login-v1; docker build -t nemo83/ws1-login:v1 .; docker push nemo83/ws1-login:v1
	cd Week6/login-v2; docker build -t nemo83/ws1-login:v2 .; docker push nemo83/ws1-login:v2

all: week1 week2 week4 week6
