#!/bin/bash
sleep 3 
echo "test" > /tmp/startup.log
amixer -q -D pulse sset Master 100%

docker pull docker.io/jhadvig/ortorehabclinic-app:latest

docker run -d -p 8080:80 docker.io/jhadvig/ortorehabclinic-app:latest &

sleep 3

chromium-browser --kiosk --incognito --app=http://localhost:8080 --password-store=basic
