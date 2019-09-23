#!/bin/bash
sudo usermod -aG wheel kiosk

sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

sudo dnf install docker chromium chromium-libs-media-freeworld ffmpeg

systemctl disable abrtd.service
systemctl enable docker
systemctl restart docker


sudo groupadd docker
sudo usermod -aG docker kiosk

# sudo passwd -d kiosk