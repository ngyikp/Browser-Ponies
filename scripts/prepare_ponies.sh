#!/bin/bash

rm -rf "ponies/.DS_Store"
rm -rf "ponies/Random Pony"
mv "ponies/Jesús Pezuña" "ponies/Jesus Pezuna"

echo Repairing names
./scripts/repair_names.py ponies/

echo 
echo Converting pony.ini to ponies.json
./scripts/convert.py ponies/*/pony.ini > ponies.json

echo 
echo Encoding sound files
./scripts/encode.sh

echo 
echo Done!
