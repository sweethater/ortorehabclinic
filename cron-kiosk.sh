#!/bin/bash

if [ $(date +%k%M) -ge 1500 ];then
    curl -s --head  https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup.sh | head -n 1 | grep "HTTP/1.[01] [23].."
    startup_available=$?

    if [ $startup_available -eq 0 ]
    then
    wget -q https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup.sh -O /home/kiosk/startup.sh
    chmod +x /home/kiosk/startup.sh
    fi
fi
