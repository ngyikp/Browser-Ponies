This branch fork of Browser Ponies delivers the latest pony content from [Desktop Ponies](https://github.com/RoosterDragon/Desktop-Ponies)!

This is also the same JavaScript and content fork used for the [Ponyhoof](http://ponyhoof.little.my) browser extension.

== Tweaks ==

`browserponies.js` has been slightly modified to support  `interactions` inside `pony.ini` instead of a separate `interactions.ini` file.

Web GUI files and unused scripts are removed from this branch fork as it is not the primary focus, please see the [main repo](https://github.com/panzi/Browser-Ponies) for those.

== How to provision the latest pony content from Desktop Ponies? ==

1. Empty/move out the current `ponies` folder.

2. Copy the [pony content from the Desktop Ponies repo](https://github.com/RoosterDragon/Desktop-Ponies/tree/master/Content/Ponies) at `Content/Ponies/` folder and paste it to the `ponies` folder.

3. Run `bash scripts/prepare_ponies.sh`.

   If you get warnings about missing packages such as `ffmpeg`, then install them and try again.

4. When the bash script finishes, the ponies are ready to serve! You can get the list of ponies to load into the Browser Ponies JavaScript through the generated `ponies.json` file.

   Bonus: Run image optimisers such as Gifsicle to reduce file size. This is easily done on macOS with [ImageOptim](https://imageoptim.com/mac).
