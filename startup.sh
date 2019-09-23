#!/bin/bash
/home/kiosk/startup-prehook.sh

if [ "$CLINIC" == "LM" ];then
    shutdown -h 15:30
else
    shutdown -h 16:00
fi

# standard
docker pull docker.io/jhadvig/ortorehabclinic-app:latest
amixer -q -D pulse sset Master 100%
docker run -d -p 8080:80 docker.io/jhadvig/ortorehabclinic-app:latest
sleep 3
chromium-browser --kiosk --incognito --app=http://localhost:8080 --password-store=basic
