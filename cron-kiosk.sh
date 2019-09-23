#!/bin/bash

curl -s --head  https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup-prehook.sh | head -n 1 | grep "HTTP/1.[01] [23].."
startup_prehook_available=$?

if [ $startup_prehook_available -eq 0 ]
then
wget -q https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup-prehook.sh -O /home/kiosk/startup-prehook.sh
chmod +x /home/kiosk/startup-prehook.sh
fi

docker pull docker.io/jhadvig/ortorehabclinic-app:latest