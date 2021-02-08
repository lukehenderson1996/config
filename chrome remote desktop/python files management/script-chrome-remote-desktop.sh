#!/bin/bash  
sudo echo "Fixing Chrome Remote Desktop"
/opt/google/chrome-remote-desktop/chrome-remote-desktop --stop
cd /opt/google/chrome-remote-desktop/
sudo cp chrome-remote-desktopWORKING.orig chrome-remote-desktop
/opt/google/chrome-remote-desktop/chrome-remote-desktop --start

