var BrowserPoniesConfig = {
	ponies: [
		{
		"name":"Rainbow Dash",
		"baseurl": "ponies/Rainbow Dash/",
		"behaviors":[
			{"name":"flyzoom","probability":0.05,"maxduration":4,"minduration":1,"speed":20,"rightimage":"flyzoom_rainbow_right.gif","leftimage":"flyzoom_rainbow_left.gif","movement":"Horizontal_Only","skip":false,"effects":[
				{"name":"rainboom","rightimage":"rainboomtest.gif","leftimage":"rainboomtest.gif","duration":4,"delay":0,"rightloc":"Center","rightcenter":"Right","leftloc":"Center","leftcenter":"Left","follow":false},
				{"name":"rainboom trail","rightimage":"rainboomtest_trail_right.gif","leftimage":"rainboomtest_trail_left.gif","duration":0,"delay":0,"rightloc":"Right","rightcenter":"Left","leftloc":"Left","leftcenter":"Right","follow":false}
			],"x":0,"y":0},
			{"name":"stand","probability":0.1,"maxduration":10,"minduration":1,"speed":0,"rightimage":"stand_rainbow_right.gif","leftimage":"stand_rainbow_left.gif","movement":"MouseOver","skip":false,"effects":[],"x":0,"y":0},
			{"name":"fly","probability":0.2,"maxduration":5,"minduration":2,"speed":5,"rightimage":"fly_rainbow_right.gif","leftimage":"fly_rainbow_left.gif","movement":"Diagonal_Vertical","skip":false,"effects":[],"x":0,"y":0},
			{"name":"dash","probability":0.25,"maxduration":5,"minduration":2,"speed":5,"rightimage":"fly_rainbow_right.gif","leftimage":"fly_rainbow_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},
			{"name":"walk","probability":0.1,"maxduration":5,"minduration":1,"speed":3,"rightimage":"trotcycle_rainbow_right.gif","leftimage":"trotcycle_rainbow_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},
			{"name":"walk_wings","probability":0.15,"maxduration":5,"minduration":1,"speed":3,"rightimage":"trotcycle_rainbow_wing_right.gif","leftimage":"trotcycle_rainbow_wing_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},
			{"name":"makerain","probability":0.01,"maxduration":5,"minduration":2,"speed":0,"rightimage":"cloud_jump_right.gif","leftimage":"cloud_jump_left.gif","movement":"None","skip":false,"effects":[],"x":0,"y":0},
			{"name":"sleep","probability":0.05,"maxduration":30,"minduration":10,"speed":0,"rightimage":"cloud_sleep_right.gif","leftimage":"cloud_sleep_left.gif","movement":"Sleep","skip":false,"effects":[],"x":0,"y":0},
			{"name":"hover","probability":0.2,"maxduration":5,"minduration":1,"speed":2,"rightimage":"hoverupdown_rainbow_right.gif","leftimage":"hoverupdown_rainbow_left.gif","movement":"Vertical_Only","skip":false,"effects":[],"x":0,"y":0},
			{"name":"theme 1","probability":0,"maxduration":13,"minduration":13,"speed":3,"rightimage":"fly_rainbow_right.gif","leftimage":"fly_rainbow_left.gif","movement":"All","skip":false,"effects":[],"speakend":"theme 1","x":0,"y":0}
		],
		"speeches":[
			{"name":"Unnamed #1","text":"Hey!","skip":false},
			{"name":"Unnamed #2","text":"What's up,brony.","skip":false},
			{"name":"Unnamed #3","text":"This desktop needs to be about twenty percent cooler.","skip":false},
			{"name":"Unnamed #4","text":":3","skip":false},
			{"name":"Unnamed #5","text":"ohmygoshohmygoshohmygosh","skip":false},
			{"name":"Theme 1","text":"Big adventure!","skip":true}
		]},
{"behaviors":[{"name":"stand","probability":0.1,"maxduration":5,"minduration":1,"speed":0,"rightimage":"stand_Pinkiepie_right.gif","leftimage":"stand_Pinkiepie_left.gif","movement":"MouseOver","skip":false,"effects":[],"x":0,"y":0},{"name":"fly","probability":0.05,"maxduration":5,"minduration":1,"speed":1,"rightimage":"fly_right.gif","leftimage":"fly_left.gif","movement":"Diagonal_Vertical","skip":false,"effects":[],"x":0,"y":0},{"name":"walk","probability":0.15,"maxduration":5,"minduration":1,"speed":3,"rightimage":"trotcycle_pinkiepie_right.gif","leftimage":"trotcycle_pinkiepie_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"walk_n_n","probability":0.15,"maxduration":5,"minduration":1,"speed":3,"rightimage":"trotcycle_pinkiepie_right_n_n.gif","leftimage":"trotcycle_pinkiepie_left_n_n.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"parade","probability":0.1,"maxduration":5,"minduration":1,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"bounce","probability":0.15,"maxduration":5,"minduration":1,"speed":2,"rightimage":"bounce_pinkiepie_right.gif","leftimage":"bounce_pinkiepie_left.gif","movement":"Diagonal_horizontal","skip":false,"effects":[],"x":0,"y":0},{"name":"bounce_n_n","probability":0.15,"maxduration":5,"minduration":1,"speed":2,"rightimage":"bounce_pinkiepie_right_n_n.gif","leftimage":"bounce_pinkiepie_left_n_n.gif","movement":"Diagonal_horizontal","skip":false,"effects":[],"x":0,"y":0},{"name":"bounce_up","probability":0.15,"maxduration":5,"minduration":1,"speed":2,"rightimage":"bounce_pinkiepie_up_down_right.gif","leftimage":"bounce_pinkiepie_up_down_left.gif","movement":"Vertical_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"Stalking_Dash","probability":0.05,"maxduration":60,"minduration":60,"speed":3,"rightimage":"trotcycle_pinkiepie_right.gif","leftimage":"trotcycle_pinkiepie_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"speakstart":"dash_follow","x":50,"y":50,"follow":"rainbow dash"},{"name":"parasprite_follow_circle","probability":1,"maxduration":60,"minduration":60,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Vertical","skip":true,"effects":[],"linked":"parasprite_follow_circle2","speakstart":"parasprite_greet","x":85,"y":45},{"name":"parasprite_follow_circle2","probability":1,"maxduration":60,"minduration":60,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Vertical","skip":true,"effects":[],"linked":"parasprite_follow_circle3","x":50,"y":5},{"name":"parasprite_follow_circle3","probability":1,"maxduration":60,"minduration":60,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Vertical","skip":true,"effects":[],"linked":"parasprite_follow_circle4","x":5,"y":50},{"name":"parasprite_follow_circle4","probability":1,"maxduration":60,"minduration":60,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Vertical","skip":true,"effects":[],"linked":"parasprite_follow_circle5","x":50,"y":85},{"name":"parasprite_follow_circle5","probability":1,"maxduration":15,"minduration":15,"speed":3,"rightimage":"trotcycle_parade_right.gif","leftimage":"trotcycle_parade_left.gif","movement":"Horizontal_Vertical","skip":true,"effects":[],"x":85,"y":85},{"name":"theme 1","probability":0,"maxduration":13.6,"minduration":13.6,"speed":3,"rightimage":"bounce_pinkiepie_right.gif","leftimage":"bounce_pinkiepie_left.gif","movement":"Diagonal_horizontal","skip":false,"effects":[],"speakend":"theme 1","x":0,"y":0}],"speeches":[{"name":"Unnamed #1","text":"Twitchy tail! Twitchy tail!!","skip":false},{"name":"Unnamed #2","text":"When I was a little filly and the sun was going down~","skip":false},{"name":"Unnamed #3","text":"All you have to do is take a cup of flour and add it to the mix~","skip":false},{"name":"Unnamed #4","text":"It's a party!","skip":false},{"name":"Unnamed #5","text":"Oh the Grand Galloping Gala is the best place for me~","skip":false},{"name":"dash_follow","text":"Hey,Dashie!","skip":true},{"name":"parasprite_greet","text":"Ugh,a parasprite!?","skip":true},{"name":"Unnamed #6","text":"Cross my heart and hope to fly,stick a cupcake in my eye","skip":true,"file":"cross my heart and hope to fly stick a cupcake in my eye.wav"},{"name":"FOREVER","text":"FOREVER","skip":true,"file":"losing a friend....FOREVER.wav"},{"name":"Theme 1","text":"Tons of fun!","skip":true}],"name":"Pinkie Pie","baseurl":"ponies/Pinkie/"},
{"baseurl":"ponies/Scootaloo/","behaviors":[{"name":"stand","probability":0.1,"maxduration":15,"minduration":10,"speed":0,"rightimage":"stand_right.gif","leftimage":"stand_left.gif","movement":"MouseOver","skip":false,"effects":[],"x":0,"y":0},{"name":"fly","probability":0.15,"maxduration":10,"minduration":5,"speed":2,"rightimage":"walk_right.gif","leftimage":"walk_left.gif","movement":"Diagonal_horizontal","skip":false,"effects":[],"x":0,"y":0},{"name":"walk","probability":0.25,"maxduration":15,"minduration":5,"speed":2,"rightimage":"walk_right.gif","leftimage":"walk_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"scoot_c","probability":0,"maxduration":10,"minduration":5,"speed":3,"rightimage":"scoot_right.gif","leftimage":"scoot_left.gif","movement":"Diagonal_horizontal","skip":false,"effects":[],"x":0,"y":0},{"name":"scoot","probability":0.2,"maxduration":15,"minduration":10,"speed":4,"rightimage":"scoot_right.gif","leftimage":"scoot_left.gif","movement":"Horizontal_Only","skip":false,"effects":[],"x":0,"y":0},{"name":"basket","probability":0.1,"maxduration":15,"minduration":10,"speed":0,"rightimage":"basket_right.gif","leftimage":"basket_left.gif","movement":"Sleep","skip":false,"effects":[],"speakstart":"Basket","x":0,"y":0},{"name":"follow_dash","probability":0.08,"maxduration":60,"minduration":40,"speed":3,"rightimage":"walk_right.gif","leftimage":"walk_left.gif","movement":"All","skip":false,"effects":[],"speakstart":"Dash","x":0,"y":0,"follow":"rainbow dash"},{"name":"CMC","probability":0,"maxduration":15,"minduration":15,"speed":5,"rightimage":"walk_right.gif","leftimage":"walk_left.gif","movement":"All","skip":false,"effects":[],"speakstart":"cmc","x":0,"y":0,"follow":"Apple Bloom"}],"speeches":[{"name":"Dash","text":"Dash! Dash! Over Here Dash!","skip":true},{"name":"Basket","text":"I'm being adorable and no one can stop me!","skip":true},{"name":"Cannon","text":"Do you know where we can find a cannon at this hour?","skip":false},{"name":"Mark","text":"I'm going to get my mark first!","skip":false},{"name":"Table","text":"We were making a table?","skip":false},{"name":"CMC","text":"CUTIE MARK CRUSADER DESKTOP PONIES!!!","skip":true}],"name":"Scootaloo"}
	],
	spawn: [
		{"name": "Rainbow Dash", "count": 1},
		{"name": "Pinkie Pie", "count": 1},
		{"name": "Scootaloo", "count": 6}
	],
	interactions: [{"name":"fluttershy_photoshoot","pony":"Fluttershy","probability":0.5,"proximity":100,"targets":["Elsie","Photo Finish"],"all":true,"behaviors":["photo_shoot_start"],"repeatdelay":120},{"name":"Pinkie_Lures_Parasprites","pony":"Pinkie Pie","probability":0.35,"proximity":125,"targets":["ParaSprite","Princess Celestia"],"all":true,"behaviors":["parasprite_follow_circle"],"repeatdelay":0},{"name":"CMC","pony":"Apple Bloom","probability":0.05,"proximity":200,"targets":["Scootaloo","Sweetie Belle"],"all":true,"behaviors":["CMC"],"repeatdelay":300},{"name":"Theme 1","pony":"Princess Celestia","probability":0.2,"proximity":125,"targets":["Applejack","Fluttershy","Pinkie Pie","Rainbow Dash","Rarity","Twilight Sparkle"],"all":true,"behaviors":["theme 1"],"repeatdelay":300},{"name":"miss parents","pony":"Princess Luna","probability":0.2,"proximity":125,"targets":["Filly Celestia"],"all":false,"behaviors":["miss parents 1"],"repeatdelay":120},{"name":"alfalfa monster","pony":"Princess Luna","probability":0.2,"proximity":125,"targets":["Filly Celestia"],"all":false,"behaviors":["alfalfa monster"],"repeatdelay":60},{"name":"flapping","pony":"Princess Luna","probability":0.2,"proximity":125,"targets":["Filly Celestia"],"all":false,"behaviors":["flapping"],"repeatdelay":90}]
};
