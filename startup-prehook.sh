#!/bin/bash
# Use for hooks
#  - edit cron-kiosh.sh ..etc.
#  - ...
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)