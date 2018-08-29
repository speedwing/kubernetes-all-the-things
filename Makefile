.PHONY: all week1 week2 week4

week1:
	cd Week1/hello; docker build -t nemo83/hello:latest .; docker push nemo83/hello:latest

week2:
	cd Week2/hello-unhealthy; docker build -t nemo83/hello-unhealthy:latest .; docker push nemo83/hello-unhealthy:latest

week4:
	cd Week4/hello; docker build -t nemo83/hello:v2 .; docker push nemo83/hello:v2

all: week1 week2 week4
