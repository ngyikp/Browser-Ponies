#!/bin/bash

mv Ponies ponies

find "ponies/" -name ".DS_Store" -depth -exec rm {} \;

rm -rf "ponies/Random Pony"
mv "ponies/Jesús Pezuña" "ponies/Jesus Pezuna"
mv "ponies/Changeling (Lv2) #1" "ponies/Changeling (Lv2) 1"
mv "ponies/Changeling (Lv2) #2" "ponies/Changeling (Lv2) 2"
mv "ponies/Changeling (Lv2) #3" "ponies/Changeling (Lv2) 3"
mv "ponies/Changeling (Lv2) #4" "ponies/Changeling (Lv2) 4"
mv "ponies/Changeling (Lv2) #5" "ponies/Changeling (Lv2) 5"
mv "ponies/Changeling (Lv2) #6" "ponies/Changeling (Lv2) 6"

echo Repairing names
./scripts/repair_names.py ponies/

echo 
echo Changing pony names
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #1"/' "ponies/changeling (lv2) 1/pony.ini"
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #2"/' "ponies/changeling (lv2) 2/pony.ini"
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #3"/' "ponies/changeling (lv2) 3/pony.ini"
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #4"/' "ponies/changeling (lv2) 4/pony.ini"
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #5"/' "ponies/changeling (lv2) 5/pony.ini"
sed -i "" -e 's/Name,Changeling/Name,"Changeling (Season 6 Finale) #6"/' "ponies/changeling (lv2) 6/pony.ini"

sed -i "" -e 's/Name,"Cheerilee (80S)"/Name,"Cheerilee (80s)"/' "ponies/cheerilee (80s)/pony.ini"

sed -i "" -e 's/Name,"Countess Coloratura (Rara)"/Name,Coloratura/' "ponies/countess coloratura (rara)/pony.ini"

echo 
echo Converting pony.ini to ponies.json
./scripts/convert.py ponies/*/pony.ini | python -m json.tool > ponies.json

echo 
echo Encoding sound files
./scripts/encode.sh

echo 
echo Done!
