#!/bin/bash

curl -s --head  https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup.sh | head -n 1 | grep "200 OK"
startup_available=$?
if [ $startup_available -eq 0 ]
then
wget -q https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/startup.sh -O /home/kiosk/startup.sh
chmod +x /home/kiosk/startup.sh
fi


curl -s --head  https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/cron-kiosk.sh | head -n 1 | grep "200 OK"
kiosk_available=$?
if [ $kiosk_available -eq 0 ]
then
wget -q https://raw.githubusercontent.com/sweethater/ortorehabclinic/master/cron-kiosk.sh -O /home/kiosk/cron-kiosk.sh
chmod +x /home/kiosk/cron-kiosk..sh
fi
