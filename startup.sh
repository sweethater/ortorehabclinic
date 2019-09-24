#!/bin/bash

day=$(date +"%a")
if [[ "$day" == "Sat" ]] || [[ "$day" == "Sun" ]]; then
    /sbin/shutdown now > /tmp/shutdown-at.log
fi

if [ "$CLINIC" == "LM" ];then
    shutdown -h 15:30 > /tmp/shutdown-at.log
else
    shutdown -h 16:00 > /tmp/shutdown-at.log
fi

chromium-browser --kiosk --incognito --app=file:///home/kiosk/welcome.html --password-store=basic &

sleep 5
curl -s --head  https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup-prehook.sh | head -n 1 | grep "HTTP/1.[01] [23].."
startup_prehook_available=$?
if [ $startup_prehook_available -eq 0 ]
then
    wget -q https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup-prehook.sh -O /home/kiosk/startup-prehook.sh
    chmod +x /home/kiosk/startup-prehook.sh
fi

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker pull docker.io/jhadvig/ortorehabclinic-app:latest

# standard startup
amixer -q -D pulse sset Master 100%
docker run -d -p 8080:80 docker.io/jhadvig/ortorehabclinic-app:latest
sleep 3
chromium-browser --kiosk --incognito --app=http://localhost:8080 --password-store=basic &
