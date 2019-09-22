#!/bin/bash
docer pull docker.io/jhadvig/ortorehabclinic-app:latest

docker run -it -p 8080:80 docker.io/jhadvig/ortorehabclinic-app:latest

