#!/bin/bash

rm -rf "ponies/.DS_Store"
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
echo Converting pony.ini to ponies.json
./scripts/convert.py ponies/*/pony.ini | python -m json.tool > ponies.json

echo 
echo Encoding sound files
./scripts/encode.sh

echo 
echo Done!
