/* the locations array in JSON format--I use double quotes here so I don't need to escape out apostrophes */
var locations = [
	{
		"name": "De Young (Museum)",
		"lat": 37.771250,
		"lng": -122.468597,
		"review": "Even if you're not here to see an exhibit, it's worth a visit to take the elevator up to the free observation deck for a 360 degree panoramic view of the city.",
		"wiki": "1",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Zero Zero",
		"lat": 37.781586,
		"lng": -122.401985,
		"review": "Ordered nuvole pasta and a Market pizza along with caesar salad, drinks, and wine. The pasta was excellent as was the pizza. The pizzas are single serving-sized and a bit crispified underneath. The whole theme of the pizza style and vanilla ice cream thing are straight from Boot and Shoe Service in Oakland, but that's fine by me because I love that place too.<br/><br/>They seem to have a pizza management problem. We were expecting the pasta and the pizza to arrive at the same time, but instead we watched people sit down next to us after we arrived, order two pizzas, finish their pizzas and dessert and leave before our pizza even arrived. It was over an hour for one pizza.<br/><br/>Looking forward to repeat visits since I live across the street...just hope they can speed up the pizzas a bit.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Le Charm",
		"lat": 37.780143,
		"lng": -122.402826,
		"review": "If you blink you might miss this little gem tucked in behind the trees on the sidewalk. But walk in and you'll encounter wall-to-wall French decor, a towering ceiling with a huge chandelier, and a covered courtyard in back for semi-outdoor dining.<br/><br/>The French owners and the rest of the staff are outstanding and take the time to answer any of your questions in detail or to work with you on recommendations.<br/><br/>Every dish I've tried is excellent. The pasta dishes are my personal favorite--these guys make pasta on par with the best Italian restaurants and pair it with delectable fall-off-the-bone meats. The pan-seared Salmon is really good too.<br/><br/>Don't come here in a hurry--working through a three-course meal can go on for hours in typical French fashion. Rather than a quiet atmosphere, you'll typically see a more lively (loud) crowd in here with upbeat (sometimes even Reggae) music in the air.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Victors",
		"lat": 37.778690,
		"lng": -122.393275,
		"review": "We are starving for burritos in SoMa and this is hands-down the best burrito on the eastern side of SoMa.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Redwood Valley Railway",
		"lat": 37.880024,
		"lng": -122.222198,
		"review": "If you like miniature steam trains, these are some of the best in the world. I've been riding these since I was a little kid and they never get old. The sound of the steam whistle, the puffing from the firebox, and the smell of the steam manage to get etched in your senses.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "Treasure Island, San Francisco",
		"lat": 37.822865,
		"lng": -122.370189,
		"review": "The 1939 Golden Gate International Exposition was the third of three World’s Fairs to take place in San Francisco. The expo was born from an idea to celebrate the completion of San Francisco Bay’s two new bridges. In 1933, the Bridge Celebration Founding Committee was formed to come up with a plan for the celebration. Candlestick Point was considered as a site, but the wise committee knew that was a ridiculous place to put any sort of recreational facility. Since we were celebrating the two bridges, why not celebrate right between them? After a few necessary approvals and a big thumbs up from President FDR, a 400 acre manmade island smack dab in the middle of San Francisco Bay began to take shape. The rocks already piled up what was then called Yerba Buena Shoals were relocated and everything in between was filled with landfill by dredging mud from the bay. More on my website...",
		"wiki": "1",
		"fs": "1",
		"category": ["explore"]
	},
	{
		"name": "Pacific Pinball Museum",
		"lat": 37.773675,
		"lng": -122.276371,
		"review": "I feel like a kid in a candy store here. I love mechanical things and pinball is the ultimate mechanical game machine. Some of those early machines are the most fun to play.<br/><br/>I just hope one day to have enough hours to spend here and really get into a few tables.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Golden Gate Bridge",
		"lat": 37.819713,
		"lng": -122.478437,
		"review": "I've walked over it more than 100 times, ridden my bike over it even more times, sailed under it, flown my plane over it, and have taken over 10,000 photos of it from every possible angle. This bridge is an Art Deco masterpiece, designed and built to absolute perfection. If you haven't done so, do yourself a favor and read a book about the history of the design (or take the shortcut and watch the Discovery Channel/PBS shows) and you'll appreciate the details of the bridge in a new light.<br/><br/>I've been inside the Great Pyramid of Giza, to the top of the Eiffel Tower, and over the Hoover Dam, but without a doubt, the Golden Gate Bridge is the greatest man-made structure on the face of the earth.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Musée Mécanique",
		"lat": 37.809267,
		"lng": -122.415957,
		"review": "Words cannot describe how much awesomeness packed into this building. Things that entertained a century ago still manage to entertain. So many turning gears, moving levers, winding pullies, and motoring mechanical goodness everywhere you look. And the Laffin' Sal at the entrance is the best surviving Laffin' Sal around.<br/><br/>I used to go to the Musée Mécanique's old location in the basement of the Cliff House as a kid. The old location was much better and much more appropriate due to its proximity to the old Playland, but I'm sure it gets much more exposure in Fisherman's Wharf. The biggest downside to the 'new' Musée Mécanique a is having to go through Fisherman's Wharf to get there (a downright miserable experience on weekends).",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "California Academy of Sciences",
		"lat": 37.769725,
		"lng": -122.4661,
		"review": "I have to admit, I liked the old CAS better than the new one, but the times they are a changin' I suppose. There was something about that old custom-built planetarium projector with all the little doodads protruding out at every angle. It was a one-of-a-kind mechanical marvel. I hear it's crated up somewhere in one of the Smithsonian warehouses now. The new Morrison Planetarium is really a movie rather than a true planetarium show, but they always have a good show.<br/><br/>Nevertheless, I've been a member since opening day and we enjoy the member's nights and other special events.",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech", "kids"]
	},
	{
		"name": "Buchanan Field Airport",
		"lat": 37.988612,
		"lng": -122.055532,
		"review": "I went through ground school and got all my training hours in at Buchanan, so I'll always consider this my home airport. Reporting 10 miles out over the Pittsburg stacks is like coming home.<br/><br/>When earthbound, it's always fun to stop by the observation area at Buchanan and do some dashboard dining or let the kids play in the new play area. There's an outdoor speaker tuned to 119.7 blasting out the tower chatter for all within earshot to hear.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Sutro Baths",
		"lat": 37.780418,
		"lng": -122.513716,
		"review": "Sutro Baths opened in 1896 as the world's largest indoor swimming establishment featuring lavish pools, tall waterslides, a concert hall, and ice skating rink. It burned down 70 years later. If you're familiar with the layout of Sutro Baths in its heyday, you can still picture where everything once was by gazing at the ruins. You can even see where the old aerial cable tramway once docked.<br/><br/>Although the crumbling brick stairway going up the cliff that I once climbed all over as a kid is now off-limits, you can still climb around all the concrete pool walls and foundations and explore dark caves that pierce the tall cliffs near the sea.<br/><br/>Afterward, head up to the historic Cliffhouse for lunch or drinks and see tons of photos and memorabilia from the glory days of Sutro Baths. The modern Cliffhouse isn't as fun as its previous form when it had the all the century-old arcade games from Sutro Baths and Playland, but at least they have nostalgic remnants.",
		"wiki": "1",
		"fs": "1",
		"category": ["explore", "outdoor"]
	},
	{
		"name": "Zacharys Pizza",
		"lat": 37.846249,
		"lng": -122.252135,
		"review": "What can I say? This is my favorite pizza place in the world...<br/><br/>Please bring Zachary's to San Francisco!!",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Computer History Museum",
		"lat": 37.413980,
		"lng": -122.077345,
		"review": "This place has a Neiman Marcus Kitchen Computer for crying out loud. I mean this 100 pound, $11k monstrosity had a built-in cutting board. The idea is that you buy this contraption, send the wife to a two week class to learn how to program it in binary code with nothing more than blinking lights as output, and then let it figure out some gourmet meals for your wife to cook. This and many other exhibits at the CHM really make you realize how far computers have come and the awkward years of trying to figure out what useful things a home computer could do.<br/><br/>I'm not sure if a non-geek would enjoy a visit here, but I just eat this stuff up. I love it.",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech"]
	},
	{
		"name": "Stow Lake Boat House",
		"lat": 37.770203,
		"lng": -122.477412,
		"review": "A row around Stow Lake always makes for a fun Sunday afternoon. Watch out for those low branches!",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Builders Booksource",
		"lat": 37.869503,
		"lng": -122.300330,
		"review": "I always wanted to pretend I was an architect (or city urban planner for that matter) and Builder's scratches that itch. So what if the only cities I'm building are in SimCity? This is one of those bookstores that I love to browse because I find something new every time I walk in.<br/><br/>About a third of the store is dedicated to technical books specific to code, contractors, building regulations, etc., but the rest of the store has the fun stuff. You can find nice hardbound with glossy paper books on architecture, urban planning, design, structural engineering, and even local interest with some independently-published local author books. They even have good kids books and a few non-book gift-type things.<br/><br/>This is my go-to refuge whenever I'm brought along on shopping trips to 4th Street. And I almost always walk out with gift to myself.",
		"wiki": "0",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Exploratorium",
		"lat": 37.801163,
		"lng": -122.398176,
		"review": "I practically grew up in the Exploratorium. I didn't realize it when I was 7 years old, but I was already grasping the fundamentals of physics, biology, geology, thermodynamics, and botany. I could solve binary arithmetic problems and explain to my friends why a bicycle stands up. Things like computer programming and physics were a breeze later on in high school.<br/><br/>Although it's no longer donation-only, today's Exploratorium is better than ever. I've had a family membership for years and bring the family in often. This is one of the best places around to bring kids--they will have fun and can't help but learn along the way. When the new location first opened, I missed the old dark, dank, cavernous feel of the original location, but the location, capacity, and overall atmosphere of the new location seems natural now. The food and waterfront view aren't bad either.<br/><br/>I've been to hands-on science museums around the world that have followed the Exploratorium's model, but the Exploratorium is the original and still the best.",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech", "kids"]
	},
	{
		"name": "Montclair Egg Shop",
		"lat": 37.826951,
		"lng": -122.210282,
		"review": "I've discovered my favorite breakfast place in the East Bay! Anyone who loves model trains half as much as me will be in heaven here. There are trains on the walls everywhere, some moving and some classics in cases--mostly O-scale. And, best of all, a MODEL BART TRAIN??? Are you kidding me?? I've been searching my whole life for one of these. I asked the guy there (owner?) where he got it and he was happy to talk about it, but I think I'm out of luck ever finding one.<br/><br/>Oh yeah, the food.... Great French toast, I mean really good stuff. Also had the fresh fruit (the large is a huge portion) and tried some waffle--all excellent. And the Peet's coffee is fresh and delicious.<br/><br/>We got seated right next to the fire place, which is probably the best seat in the house on a cold, rainy day. Maybe we'll have to request this next time. I'm sure I'll be seeing much more of the Montclair Egg Shop.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Grand Lake Theatre",
		"lat": 37.811452,
		"lng": -122.247520,
		"review": "Choices:<br/><br/><br/>Live Wurlitzer organ performance or deafening Pepsi ads?<br/><br/>Good old popcorn or super-hydrogenated stuff soaked in yellow #7?<br/><br/>Museum-like classic projectors display in the lobby or video games?<br/><br/>Egyptian-themed theater or plain black paneled walls?<br/><br/>Awesome neo-classical interior or uninspiring dull endless hallways?<br/><br/>Polite moviegoers or obnoxious talking, texting morons?<br/><br/>$10 or $12?<br/><br/><br/>Why on earth would you choose a megaplex over the Grand?",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Hotel Utah Saloon",
		"lat": 37.779204,
		"lng": -122.397990,
		"review": "The Utah serves two purposes very well:<br/><br/>(1) It's a perfect place to sit at the bar and grab some beers and burgers if you're in the area or heading down 4th St to the ballpark.<br/><br/>(2) It's a great music venue on the weekends to just chill with good music and beer. In an age of $100+ concert tickets, it's nice to have a place to pay a modest cover charge and get your fill of good loud music.<br/><br/>The Utah is full of character from floor to ceiling...this place even screams character from across the street.<br/><br/>Everything is very close quarters throughout, from the tiny stage to the cramped seating area (think being aboard a submarine). Iwish there was a bit more room, but it is what it is.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub", "fun"]
	},
	{
		"name": "Little Star Pizza",
		"lat": 37.766353,
		"lng": -122.422405,
		"review": "The closest thing to Zachary's in the city! I love deep dish pizza and this is almost perfect. (They don't have the good caeser salad that Zachary's has though.)<br/><br/>The crust is a bit heavy on the oil/butter or whatever it is, but it's crazy delicious--I just have a feeling I'm taking in 5000 calories every time I go there.<br/><br/>Great beer, great atmosphere, great service...and usually a long wait to get in. It's in a good spot to walk around in the Mission though.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Swensen's Ice Cream",
		"lat": 37.799004,
		"lng": -122.419151,
		"review": "I grew up 1/2 block away from Swensen's. My dad always got me a hot fudge sundae on Sunday afternoons.<br/><br/>Nowadays, we still head up the hill to Swensen's to get ice cream cones all the time. It's been a LONG time since I had the hot fudge sundae, but I got one the other day and was happy to see it was EXACTLY the same as it was when I was a lad (except my dad always got me the small size--I didn't even know they had huge ones too). It's always great when a classic doesn't try to change.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Angel Island (California)",
		"lat": 37.860747,
		"lng": -122.426567,
		"review": "A great easy-paced day hike smack dab in the middle of the bay with spectacular views in all directions.<br/><br/>The island is rich in history, including the sobering reminders of our country's darker times of years past.<br/><br/>The only downside to an Angel Island visit is the inevitable last-minute rush to make it to the departing ferry. I have no idea what happens when one misses the last ferry off the island.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Drawbridge, CA",
		"lat": 37.465879,
		"lng": -121.974506,
		"review": "I set out for an impromptu trek to Drawbridge one warm winter afternoon, completely unprepared for an urban exploration journey. As the sun began to dip toward the horizon, I set off down the rocky trail with a camera and tripod slung over my shoulder. As the miles wore on, the sights and city noise of Fremont diminished on the horizon as the nature of the bay’s magnificent wetlands came alive... (full story on my website)",
		"wiki": "1",
		"fs": "1",
		"category": ["explore", "outdoor"]
	},
	{
		"name": "Kezar Stadium",
		"lat": 37.767013,
		"lng": -122.456006,
		"review": "When your feet have had enough punishment pounding the concrete city sidewalks, give them the rejuvenating treatment of the Kezar track. The modern track and rest of the stadium are impeccably maintained. The bleachers are perfect for sprints too.<br/><br/>Listen closely for distant historic echoes of 49er fans cheering alley-oop touchdown passes from YA Tittle to RC Owens.<br/><br/>Just stay out of lane 1 (unless you're running sub 6 minute miles) and respect the other runners and track teams who often train there. And taking a single step onto the grass is a big no-no.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Playland-Not-At-The-Beach",
		"lat": 37.916852,
		"lng": -122.312757,
		"review": "It's great to see there's still a flicker left in the flame of SF's greatest amusement park Playland at the Beach. It's really a shame that Playland was bulldozed for condos in the early 70s but the tradition lives on at Playland-Not-At-The-Beach.<br/><br/>We booked the whole place for a party once and the staff couldn't have been kinder to everyone. There's so much to do that no one wanted to go home at the end of the night.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "San Francisco Railway Museum",
		"lat": 37.793799,
		"lng": -122.393579,
		"review": "This is a must-see place for any rail fan or street car fan. It's a small half museum/half store with plenty of unique things that you can't buy anywhere else.<br/><br/>I'm a sucker for the limited odds and ends they sell here and I have a growing collection of things like cable car track pieces and genuine Muni rollsigns that have retired from service.<br/><br/>And don't forget to pick up a calendar. My photos have been featured in it for several years.",
		"wiki": "1",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Ocean Beach, San Francisco",
		"lat": 37.769746,
		"lng": -122.512446,
		"review": "Sure it's no tropical Hawaiian beach, but it's our beach and I love it. The water's cold but refreshing on a hot, sunny day. Ocean Beach is also great for dog swimming and kite flying. A walk over to the Beach Chalet or up to the Cliff House for a beer (or two) and bite to eat is always in order after a day trip to the beach.<br/><br/>But the beach comes alive as the sun dips into the Pacific and the pastel houses along the Great Highway glow. I've been to and even set up a few bonfire parties on the beach, which never fail to be good times. Just keep the flame height lower than the beach wall or you get a visit from the friendly ranger.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "San Francisco Cable Car Museum",
		"lat": 37.794733,
		"lng": -122.411713,
		"review": "Testing",
		"wiki": "1",
		"fs": "0",
		"category": ["arts", "fun"]
	},
	{
		"name": "Mission Dolores Park",
		"lat": 37.759939,
		"lng": -122.427026,
		"review": "It's always sunny in Dolores Park! When Karl the Fog has you down, you can escape the freezing dankness of the rest of the city and come to the miracle spot where the sun always seems to burn through. And while picnicking or basking in the sun, you get a great view of the fog rolling over the rest of the downtown skyline.",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "AT&T Park",
		"lat": 37.778540,
		"lng": -122.38915837,
		"review": "Best ballpark in the country, hands down. There's nothing like the atmosphere, views, and location of AT&T Park.<br/><br/>Aside from countless Giants games I've been to, I've been to football games, corporate parties, and other events here. It's one of the best venues around.<br/><br/>Unless you're making an entire day out of tailgating, it's ridiculous to even consider driving here. There are plenty of public transit options.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Filbert Steps",
		"lat": 37.802124,
		"lng": -122.403806,
		"review": "My favorites go-to place for a super-intense stair running workout.<br/><br/>Start at the base of the stairs near Sansome Street and start running upward, two steps at a time. Pass Napier Lane, one of the only short boardwalk alleys left in the city where sailors were once shanghaied, then up to the spectacular Coit Tower. Walk down the neighboring Greenich Steps. Rinse, lather, repeat 4x.",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Leroy King Carousel",
		"lat": 37.783345,
		"lng": -122.402052,
		"review": "This is now called the LeRoy King Carousel. We went to the grand reopening ceremony and that LeRoy is quite a guy!<br/><br/>How cool it is to have an original 1906 Looff carousel right in the heart of San Francisco. Not just any Looff carousel but the original carousel that spun at Playland At The Beach for 58 years.<br/><br/>It was recently completely restored and is absolutely beautiful down to every detail, from the shiny lacquered hardwood floors to the polished gears and rods that run so smoothly once again. The only thing missing is the old band organ.<br/><br/>You might walk right by it, but don't mix this historical machine up with a cheap Pier 39 merry go round because this is the genuine thing. And it's worth a ride by both the little kids and the big kids.",
		"wiki": "0",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "The Walt Disney Family Museum",
		"lat": 37.801336,
		"lng": -122.458691,
		"review": "A must see for any Disney fan, the WDFM has a treasure trove of artifacts from the early Walt days all the way up to the creation of Disneyland. I can gaze for hours at the massive and detailed Disneyland scale model.",
		"wiki": "1",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Clarion Alley",
		"lat": 37.763006,
		"lng": -122.420551,
		"review": "This is the epicenter of the Mission murals and always worth a stroll when wandering up or down Mission St. or Valencia St. Probably one in three times I come through here I see an artist working on a new mural.",
		"wiki": "1",
		"fs": "1",
		"category": ["explore"]
	},
	{
		"name": "Jack London Square Public Shoreline",
		"lat": 37.793903,
		"lng": -122.275998,
		"review": "One of my favorite kayak put-ins to go cruise around Alameda while the girls shop at farmers market.",
		"wiki": "0",
		"fs": "0",
		"category": ["outdoor"]
	},
	{
		"name": "USS Hornet Museum",
		"lat": 37.772726,
		"lng": -122.302797,
		"review": "It's sort of a shame that the good old Hornet is tucked away in the far corner of Alameda, hidden from tourists (and probably even locals who don't know about it). It just doesn't enjoy the front-and-center glory of its cousin the Midway down in San Diego gets, but that's part of the Hornet's charm.<br/><br/>The Hornet is brimming with history, from WWII to retrieving the Apollo 11 astronauts, and it's the sort of place you can climb aboard and just go explore. There are little nooks and crannies everywhere to check out.<br/><br/>Even though the Hornet is not on center stage in the Bay Area, it certainly should be.",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech", "explore"]
	},
	{
		"name": "William Stout Architectural Books",
		"lat": 37.796622,
		"lng": -122.403420,
		"review": "In today's modern world of ebooks, there's still nothing like a stack of nice and heavy hard-covered architectural books on the coffee table, and this is the place to get them. Although I'm no architect and only a pretend urban planner, this is my favorite bookstore in the city to peruse. Stout has a good collection of local SF books, many of which I don't seem to run into at other bookstores. I love going through the transportation section and the modern architecture stuff as well.<br/><br/>The only problem is I often walk out having to lug a 20 pound book the size of a briefcase all the way back home.",
		"wiki": "0",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Mount Diablo State Park",
		"lat": 37.881366,
		"lng": -121.914647,
		"review": "Probably my favorite bike ride in the entire Bay Area is to the summit of Diablo, even though I'm far from a being a climber. I've ridden up 100+ times from both sides and hiked up a few times too. After an hour of climbing, there's something about that final 150 yard, 16% gradient stretch to the summit that puts the body through unthinkable excruciation, making the view from the top so much sweeter.<br/><br/>I like the mountain so much I was Race Director for the annual USA Cycling-sanctioned Mt. Diablo Hill Climb for a number of years.",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Mount Tamalpais State Park",
		"lat": 37.899857,
		"lng": -122.613766,
		"review": "The Bay Area's go-to epicenter of mountain biking in my opinion. After all, Mt. Tam was the birthplace of the mountain bike and the trails and views are spectacular.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Pigeon Point",
		"lat": 37.181751,
		"lng": -122.393980,
		"review": "A beautifully scenic coastline paradise, perfect for a few hours of picnicking. It's always fun to climb up the old spiral staircase to the giant Fresnel lens. I was even best man at a (very cramped) wedding INSIDE the lighthouse itself.",
		"wiki": "1",
		"fs": "1",
		"category": ["explore"]
	},
	{
		"name": "Santa Cruz Beach Boardwalk",
		"lat": 36.964226,
		"lng": -122.018022,
		"review": "There's enough surviving nostalgia at the boardwalk to still make it a fun place and maintain the old seaside amusement park feel from a century ago. The Giant Dipper and carousel are meticulously-maintained and remain absolute classics.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "Marina Green",
		"lat": 37.806375,
		"lng": -122.437710,
		"review": "One of the best places in the city for a picnic, game of Frisbee, or to fly a kite. It's nice to have a giant, uncrowded rectangle of space in a big city.<br/><br/>Enjoy the sounds of the Wave Organ at the Marina Green on the jetty across from Yacht Rd near Marina Blvd and Lyon St. Designed by scientists from the Exploratorium, the concrete tubes make sea-powered music when the tide hits them.",
		"wiki": "1",
		"fs": "0",
		"category": ["outdoor"]
	},
	{
		"name": "Tilden Park Merry-Go-Round",
		"lat": 37.900508,
		"lng": -122.256025,
		"review": "I've been riding this thing practically since the day I was born. It's a marvelous piece of machinery down to every detail.<br/><br/>The new operator embodies a refreshing change of pace and really cares about the carousel. I talked to him about possible restoration plans for the old original organs and he said it's a matter of money. Maybe it's time for a Kickstarter",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "Point Isabel Dog Park",
		"lat": 37.901195,
		"lng": -122.324101,
		"review": "A paradise for dogs and dog lovers. On a sunny Sunday afternoon, you'll find the number of dogs hitting quadruple digits. The canines seem to fall into their instinctual behaviors and form packs with the other dogs.<br/><br/>There are miles of path, beaches, a water inlet that water breeds love to swim, and spectacular views for the humans to enjoy.",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "War Memorial Opera House",
		"lat": 37.778657,
		"lng": -122.420639,
		"review": "With my dad in the opera, I grew up with carte blanche to the backstage of the opera house. Instead of sitting bored in a seat during rehearsals, I would explore. From the dank depths of the basement to the catwalks above the stage, I use to know my way around every little niche and hideaway in the massive building. I still think about my 'junior phantom' days whenever I go see an opera.",
		"wiki": "1",
		"fs": "1",
		"category": ["arts"]
	},
	{
		"name": "Palace of Fine Arts",
		"lat": 37.802938,
		"lng": -122.448389,
		"review": "Even though the Exploratorium is gone, the Palace of Fine Arts is the only lasting remains (although rebuilt) of the enormous 1915 Pan Pacific Exposition which took up most of Cow Hollow and the Marina District 100 years ago. Once a filthy place, the lake has been cleaned up and is nice to take a walk around or relax on the lawn and gaze at the swans and endless wedding parties coming for photos. Everything is earthquake-retrofitted now, so you can relax while standing under the massive dome. The theater makes for a great music venue too.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor", "arts"]
	},
	{
		"name": "Point Bonita Lighthouse",
		"lat": 37.815620,
		"lng": -122.529520,
		"review": "One of the jewels of the northern California coastline. The short hike down to the lighthouse is worth it in itself for the views of the Golden Gate and the coastline. Make your way through the dark cave and to the bouncy, swaying cable suspension bridge that extends across to the lighthouse. Many people seem to chicken out but the bridge is the highlight of the hike!",
		"wiki": "1",
		"fs": "1",
		"category": ["explore"]
	},
	{
		"name": "Chabot Space and Science Center",
		"lat": 37.818667,
		"lng": -122.180884,
		"review": "Once a staple destination for my elementary school fieldtrips and YMCA summer camp outings, the old Chabot had its charm, but it was always the same routine: you unload out of the school bus, the guy in the lab coat bangs the little rocket on the cable with his hammer, then they file you into the tiny planetarium.<br/><br/>This is not your father's Chabot anymore. The new place is a state-of-the-art facility with much more to do. The exhibits are always interesting and the kids love it.<br/><br/>But the best experience at Chabot is on those clear Friday nights when all the amateur astronomers are set up and the big scopes are locked and loaded. There's no better place in the Bay Area to go stargazing with plenty of experts to explain exactly what you're looking at!",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech", "kids"]
	},
	{
		"name": "Niles Canyon Railway",
		"lat": 37.594162,
		"lng": -121.889028,
		"review": "Huge steam trains in the Bay Area! This heritage railway runs a short out and back track through beautiful Niles Canyon and transports you back to yesteryear. The holiday train is always fun but my favorite special event is the photographer's special where they drop you off at picturesque spots along the track and 'pose' the trains and run them back and forth for photo opportunities.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Ramen Underground",
		"lat": 37.791550,
		"lng": -122.404028,
		"review": "I love me some good ramen and this is my favorite in the city. Forget just the city, I don't think I've had ramen this good in all the little ramen places I explored in Tokyo. This place is the real deal with Japanese staff and fresh noodles.<br/><br/>I've settled in on the Tonkatsu limited-dinner-only special with extra noodles and extra pork as my go-to ramen here. No way you'll leave hungry after that. And you can always just ask for a noodle refill if your noodle-to-broth ratio falls short mid-bowl.<br/><br/>We only come here for dinner when there's rarely any trouble getting a table. I couldn't imagine trying to cram in here during weekday lunch.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Treasure Island Bar and Grill",
		"lat": 37.816678,
		"lng": -122.370466,
		"review": "I've been here at least a dozen times in the past few months while working on a project on TI, and keep coming back, usually meeting with my family. Believe it or not, way out there in the middle of the bay, the burritos are outstanding! Good meat, good fillin's, and good-sized. I've tried some of the other dishes (picking off other people's plates) so I know the fish tacos and meat platters are good too, but I always stick to the burrito.<br/><br/>The bartenders are pro mixologists and can make almost any drink. The beer is of the bottled variety but there's a decent selection and it's always cold.<br/><br/>Don't expect anything fancy--this is far from a full-blown restaurant. You order at the end of the bar and your food is delivered to your table. The TVs are always tuned into sports, and if there's a Giants game, you can be assured it will be on all screens. The place has a small-town feel right smack in the middle of two metropolises.<br/><br/>The outdoor patio is perfect for warm days, with views of the eastern span and good old Goat Island. A wind screen surrounds the patio to keep TI's infamous gusts to almost nothing.<br/><br/>5 stars for location, good food and drinks, views, nice peeps, and the fact that it's always easy to get in and get some food without huge crowds.",
		"wiki": "0",
		"fs": "0",
		"category": ["grub"]
	},
	{
		"name": "Los Cantaros Restaurant and Taqueria",
		"lat": 37.809161,
		"lng": -122.256578,
		"review": "This is hands-down the best burrito place in Oakland. And it's one of only a few counter-service taquerias open for dinner. The burritos are big and delicious.<br/><br/>They don't skimp on the guacamole and the burritos aren't greasy, resulting in a respectable guac to grease ratio--one of many factors in my burrito rating algorithm.<br/><br/>The place is always busy, the employees are friendly, and you can usually catch whatever game is playing on one of the TVs. The margaritas aren't fantastic, but what can you expect for $4?<br/><br/>On my go-to list to get my burrito fix when in Oakland.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "The Little Chihuahua",
		"lat": 37.772042,
		"lng": -122.437009,
		"review": "Pure awesomeness! This place always seems to be PACKED, but it's definitely worth it. I find myself sometimes making a detour to hit this place when I find myself on this side of town.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Taqueria Cancún",
		"lat": 37.760495,
		"lng": -122.419494,
		"review": "Crazy delicious burrito!<br/><br/>This place makes a nearly perfect burrito. The ingredients are fresh, the meat is piled on plentifully, and even the tortillas are good, resulting in a nice bulky and tightly-wrapped burrito with the weight of a dumbbell. The burritos are quite spicy by default, so if you don't like spicy you better tell them before they start pouring everything on.<br/><br/>Only downsides here are that they don't take credit cards and the chips seem to be store-bought and a bit stale.<br/><br/>The price is right, except I usually need to tack on $2 for the ATM fee because I never seem to carry cash anymore with just about every place in the world accepting credit cards now.",
		"wiki": "0",
		"fs": "0",
		"category": ["grub"]
	},
	{
		"name": "Philz Coffee",
		"lat": 37.775469,
		"lng": -122.393445,
		"review": "I almost wish I never tried this place because it brings coffee to a higher level, and good old Peet's will just never be the same. Seriously, what do they put in this coffee? And I don't say this just because this is the latest circle J that we San Franciscans tend to fall into over trendy places, but because it really is the greatest coffee ever.<br/><br/>I'm finding myself increasingly walking past the Peet's across the street from me in favor of the 1/2 mile trek to Philz.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "El Castillito",
		"lat": 37.768747,
		"lng": -122.429388,
		"review": "Ok I went back to give this place a second chance and had quite possibly the greatest burrito ever made. I mean it was so good I just sat and and day dreamed about it for a while after the last bite. I almost felt obligated to cuddle with the wrapper or something afterward.<br/><br/>I would normally deduct:<br/><br/> - 1/2 star for inconsistent quality since I wasn't that impressed the 1st time<br/><br/> - 1/2 star for cash only and forcing me to take 96 cents in change<br/><br/>However, I'll give it an extra credit star for the mind-altering deliciousness.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "The Garden Court",
		"lat": 37.788014,
		"lng": -122.401866,
		"review": "The Palace Hotel was one of the largest and finest hotels in the US when it opened in 1875. The 'New' Palace opened in 1909 after the original burned after the great quake of 1906. The Garden Court of the New Palace is in the exact same spot as the original Grand Court where horse drawn carriages would enter the hotel.<br/><br/>The Garden Court of the New Palace upholds the prestigious history of hotel's 19th century roots. The entire court remains nearly identical and maintains all the elegance it held in the early 1900s (except there are many more tables crammed in). The whole hotel brims with history.<br/><br/>This is a great place for those special occasion brunches. The service is top-notch. I mean you won't go 30 seconds with an empty champaign glass without someone topping it off. There are more food choices that you can even sample at one sitting, so choose wisely. All the seafood dishes are primo stuff. But it's definitely not cheap at $100/person after tip.<br/><br/>And don't worry, there are no horses coming through the court anymore.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Taqueria Cazadores",
		"lat": 37.772788,
		"lng": -122.418845,
		"review": "I randomly stumbled across this little tucked-away trailer tonight and promptly approached the window at the urging of my growling stomach. Holy tortilla! This burrito just instantly earned a spot on my top 10 burritos in SF list (and believe me I've put years of research into my list).<br/><br/>You wouldn't expect a little trailer to be stocked with all the different tortilla flavors (spinach, tomato, etc), but this little mobile unit is gourmet all the way! I had a super grilled chicken burrito on spinach tortilla. Unlike many taco trucks, the burrito is not greasy at all. The grilled chicken is among the best I've ever tasted wrapped inside a tortilla. The guacamole and rice are up to par too. Best of all, the burrito is huge.<br/><br/>There are a few tables squeezed in the little slot next to the trailer if you don't mind the noise of the mega Van Ness and Mission intersection. I don't live too close, but I'm sure I'll be making the trek out here for more whenever I get a chance.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Taqueria Mana",
		"lat": 37.790084,
		"lng": -122.407305,
		"review": "I've seen this place many times when heading up Stockton St, but it always looked sort of scary in it's dirty little corner near the tunnel next to the happy ending place. This definitely falls into the 'don't judge a book by it's cover' category.<br/><br/>I got a chicken super burrito without sour cream. Once I sunk my teeth into it, I couldn't believe I didn't discover this place sooner. The whole thing was juicy and delicious--I mean juicy rather than greasy...and I do mean delicious. Chopped onions, melted cheese, succulent chicken, delicious white rice, and a bunch of other stuff. I've never had such a juicy burrito, and it was perfect. Nice, hefty size too.<br/><br/>The guy at the register was friendly too. I'll be coming back here all the time.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Java Beach Cafe",
		"lat": 37.760465,
		"lng": -122.509014,
		"review": "My favorite coffee shop by the beach. They brew up a mean cup of joe here and make some tasty, hefty sandwiches too. They've even got a little bar in back with draft beer. The occasional live band shows up outside for some entertainment.<br/><br/>The biggest downside to the place is when the hog bikers show up and take over the place.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Hilda’s Coffee Shop",
		"lat": 37.975751,
		"lng": -122.562993,
		"review": "Stumbled across Hilda's on a recent drive to San Anselmo. This place is about as mom and pop as they come. I almost ordered French toast but our very kindly waitress talked me into the pancakes, which I was assured Hilda's was famous for.<br/><br/>She wasn't kidding. These were seriously the best pancakes I've ever had in my life. Deliciously soft in the middle and then taking on a crispy crepe-like consistency as you approach the perimeter.<br/><br/>The whole experience makes this place worth a repeat morning breakfast visit to San Anselmo.<br/><br/>Been back many, many times since. Always order the German pancakes and coffee. Often manage to be seated right next to George Lucas, another frequent customer. I do not bring up Jar Jar Binks to him.",
		"wiki": "0",
		"fs": "0",
		"category": ["grub"]
	},
	{
		"name": "Limón Rotisserie",
		"lat": 37.757027,
		"lng": -122.416476,
		"review": "Wrote my first 4-star review when this place first opened and they didn't even have their alcohol license.<br/><br/>Limon has since made it's way up on to my list of favorite restaurants in the city. They have a full bar now and serve great Peruvian beers and some top-notch sangria. The food is better than ever and it seems like the menu has expanded a bit. I love this place!",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Taquerias El Farolito",
		"lat": 37.752716,
		"lng": -122.418265,
		"review": "I'm embarrassed and ashamed to have overlooked this location of El Farolito for so long. It turns out it's the best and one of the best burritos in SF.<br/><br/>There are plenty of great burritos in the Mission, and then there are places like this that add that little extra something that makes devouring the burrito a life-altering experience. I'm talking little things like the perfect blend of spices, the way the tortilla is grilled just right, and so on.<br/><br/>And for the trifecta, not only are they delicious, but the burritos are huge and cheap.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "The Chieftain Irish Pub and Restaurant",
		"lat": 37.781488,
		"lng": -122.405237,
		"review": "One of my favorite local watering holes! Great place to hang out with buddies and catch a soccer game (which always seem to be on here). Great Guinness and they probably have the BEST fish & chips in the world. Mmmm...crazy delicious. The atmosphere is genuine Irish (if you've been to Ireland).",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Papalote Mexican Grill",
		"lat": 37.775700,
		"lng": -122.445977,
		"review": "I originally knocked off a star for the outrageously-priced $21 triple-threat burrito, but I've been drawn like a vacuum into Papalote whenever I'm in the neighborhood for the past few years. A chicken super burrito is the same size and half that price, just prawn-less. The burritos are filled with fresh ingredients, wrapped in a flakey tortilla, and have a decent heft. A genuine top-notch product.<br/><br/>The staff is friendly and delivers said burrito on a plate with some tasty chips and gourmet-type salsa. And you've gotta love the perfect 100 health inspection score.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "House of Prime Rib",
		"lat": 37.793324,
		"lng": -122.422641,
		"review": "This place is a San Francisco legend and lives up to the hype. Get back into your Neanderthal roots and prepare for some serious carnivorous chow down. The whole meal revolves around your choice of prime rib with a salad, potato, Yorkshire pudding, and creamed spinach--I'm not sure if anything else is even an option. You'll get a tree of fresh horseradish blends, including the straight-up variety which I prefer.<br/><br/>Go for the king size cut and they'll bring you a bonus cut if you can finish that (no you can't get a doggy bag for the bonus meat). There's no way to leave this place hungry. Service is great, atmosphere great...what can I say. The price is actually a good deal considering the quantity/quality of food.<br/><br/>TIP: If you're early to your reservation or waiting for a table, the Thai bar a few doors down has mugs of draft beer the size of a bathtub for $5. Great way to start off an evening of complete excess.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Hot Italian",
		"lat": 37.841116,
		"lng": -122.293554,
		"review": "When hunger struck, we randomly pulled in in the Market Place lot (after all, I really have no idea where to look for food in Emeryville). Glancing in the window, I was immediately drawn to the red Bianchi, a spitting image of my old racing Bianchi, hanging on the wall among other fine Italian racing bikes. Intrigued, I insisted we must head inside.<br/><br/>We took seats at one of the long family-style tables and in minutes I had a pint of ice-cold Racer 5 plunked down in front of me. Ordered a Briatore calzone. Admired the handlebar clothes racks on the wall while waiting (yes I love all things bicycle). A soccer match played on the giant projection screen behind me. The smell of pizzas and calzones baking away in the huge steel oven in the exposed kitchen had me drooling.<br/><br/>Then it arrived. Different looking and different tasting than your average calzone, but I mean different in a good way: all puffy, mangled, and full of delicious fondue-like cheeses with a smoked flavor. Holy Cipollini, that is one delicious calzone! Another Racer 5 please!<br/><br/>I became an instant fan of Hot Italian that night. Next time I find myself in Emeryville, I know exactly where I'm heading when the hunger hits. (Can we get one in San Francisco please??)",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "The Star",
		"lat": 37.814280,
		"lng": -122.246474,
		"review": "I'm a big fan of the Little Stars in SF and the one in Albany, but the Star leaves out the word 'little' for a reason: it actually has room inside. Instead of sitting in the laps of your neighboring diners, you can stretch out in comfort at the Star.<br/><br/>Whenever the topic of Little Star comes up, the first thought bubble that appears over my head is the ice-cold Racer 5 IPA while the pizza's in the oven. But the Star is lacking my beloved Racer 5, but they have another IPA or two which aren't all that shabby.<br/><br/>These are the best cornmeal crust deep dish pizzas around. But I think it's time to come up with another name for 'Chicago-style pizza' to put an end to the Chicago vs. New York debate and calm Jon Stewart down. Just call them Chicago Pies and be done with it already.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Kirala Japanese Restaurant",
		"lat": 37.859327,
		"lng": -122.266731,
		"review": "My sushi snob friends gravitate to this place from cities away. I think I've tried everything on the menu by now. It is definitely some of my favorite sushi in the bay area. The eel, salmon, and tuna based rolls are some of my favorites. Really good stuff from the robota grill too.<br/><br/>Sit back and enjoy an ice cold draft asahi from the bar while you wait for your table.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "IFLY SF Bay",
		"lat": 37.598607,
		"lng": -122.065585,
		"review": "I was intrigued by indoor skydiving ever since I was a young lad when I saw it on Evening Magazine circa 1982. I always envisioned a huge cylindrical chamber full of people in Michelin Man type outfits flying around bumping into each other. It's not really like that--the chamber is small and transparent, and it's only you and your instructor in there (with a bunch of onlookers watching from the bleachers or with their noses pressed up against the glass). Oh, and also very fast--you only get 2 one-minute sessions.<br/><br/>It's definitely an interesting experience, albeit a short one. I felt like just when I was starting to get the hang of it, my instructor grabbed me and tossed me out the exit opening. Maybe that's the way to get you to come back for more. I really wanted to spend a good half hour in there...but I'm sure I'll be back again sometime.",
		"wiki": "0",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Taqueria La Cumbre",
		"lat": 37.764568,
		"lng": -122.421686,
		"review": "Among the elite powerhouse burritos of the Mission. The burrito is big and hefty and filled with good solid tasty ingredients. The chicken was pulled off the grill and chopped right before my eyes. As a whole, the burrito is a bit messy to eat as it drips right through the foil, but it's definitely finger lickin' good.<br/><br/>Inside: the place probably has more character than any other taqueria in the Mission. Sort of a mix between the Mexican version of a Hard Rock and a TGI Fridays. Everyone working there is friendly too.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Mexico au Parc",
		"lat": 37.782204,
		"lng": -122.393594,
		"review": "I've been coming to this place for quite some time and it's always been a decent burrito. Over the years, the burrito has evolved from an El Balazo imitation to its own brand. The food is fresh but expensive.<br/><br/>TIP: order your food on the right, then go to the line at the register on the left to pay. The lack of signage causes some people to stand in the wrong line.<br/><br/>And if the tables inside are all full, you can always go sit in South Park where a random dog will inevitably take a break from playing to sniff his way over to you looking for a handout.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Tommy’s Joynt",
		"lat": 37.785555,
		"lng": -122.421628,
		"review": "A San Francisco landmark, right smack dab in the intersection of two of SF's biggest trans-city arteries. I can't imagine Van Ness Ave without this beacon of tradition brightening up the street.<br/><br/>I think I first ate here when I was about 7 years old. You can get lost in the sea of garagesale-esque memorabilia decorating every square inch of the walls and ceilings.<br/><br/>The clientele seems to always be male-dominated with the unsophisticated and gritty hof brau-type atmosphere (well at least in my experience the ladies seem a bit daunted by the whole scene).<br/><br/>The food is simple and the beers are plenty. The meat is excellent and all the sandwiches I've had are nothing more than a cut of meat on a plain white roll. The roll functions like a sponge to soak up all the juice from the meat. Delicious.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Nick’s Crispy Tacos",
		"lat": 37.796178,
		"lng": -122.422129,
		"review": "We tend to gravitate to Nick's whenever I'm in the neighborhood. It's a refreshing change to go to a burrito/taco place and relax in big, comfy, spacious booths with a cold beer and have the food delivered to your table, all while enjoying whatever games are on the TVs surrounding the bar.<br/><br/>The burritos are wrapped with steamed, doughy tortillas and packed with freshness. The guacamole is excellent. They need to add pinto beans as an option, however.<br/><br/>Since the place doubles as a nightclub, the floors tend to be a bit sticky. And cash-only sucks.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "El Farolito",
		"lat": 37.752827,
		"lng": -122.411222,
		"review": "Definitely among the elite ranks of powerhouse burritos in the city. Nice, hefty, and delicious, like a mission burrito should be.<br/><br/>The whole restaurant smelled like el baño though, like an overpowering outhouse-chemical type of smell...whoa.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "King of Thai Noodle House",
		"lat": 37.798630,
		"lng": -122.407103,
		"review": "Not the world's greatest Thai food, but it is good. The pad see ew noodles are a little too sweet for my taste and the portions aren't huge. So 3 stars for the food.<br/><br/>But this place earns an extra star for low prices--I mean wow what a deal. And $2 pints of ice cold Sierra Nevada! You can't beat that.<br/><br/>There are plenty of nice TVs all around too, although the sign on the front door warns: 'We are a Thai restaurant allowed to have TVs. Please don't call us a sports bar.'' Ok, fair enough--I will make sure to order food if I happen to stop in for beers and Giants sometime.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Goat Hill Pizza",
		"lat": 37.762314,
		"lng": -122.397744,
		"review": "There's a front room and a back room, with the better views in the back room. We have another Goat Hill closer to home, but we seem to come here more often--maybe it's the view and the relaxed pace of Potrero Hill.<br/><br/>While waiting for your pizza, enjoy a pint of cold Anchor Steam draft, brewed right down the street. The salads are not fancy, but are hearty-sized and good. The soups are rather plain with various pizza toppings added in. The staff is always nice. A pianist usually comes in in the early evening for some live music at the piano by the front door.<br/><br/>Goat Hill pizzas are delicious. They are a bit different because they use sourdough bread which sends it to the crunchy side of the doughiness spectrum.<br/><br/>As I recommend with any pizza place, harness the power of pi and always order the largest size pizza on the menu to get the best value. You'll reap the rewards of your mathematical savviness while enjoying leftover pizza the next day.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Shalimar Restaurant",
		"lat": 37.786312,
		"lng": -122.412871,
		"review": "You gotta know what you're getting into when you come here. The place is dirty, disorganized, smoky as hell, and in the worst part of town, but the food is authentic as can be and unbelievably good. You're on your own to try to stake out a table, and you order and pay up at the counter.<br/><br/>Had the chicken tikka masala, kabli chana, and menthi, all of which was delicious. The naan is thick and doughy and really tasty. You get chai tea for free, or try the mango laasi. If you want alcohol, bring your own stuff in from the corner liquor store.<br/><br/>The staff isn't exactly talkative or friendly, but they sure know how to cook. Sort of the soup nazis of Indian food here.<br/><br/>Just plan to get home and wash the smoke out your clothes and air out your jacket, because every fiber of your clothes will reek, but it's all worth it.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Muir Woods National Monument",
		"lat": 37.895135,
		"lng": -122.578128,
		"review": "One of the most beautiful hiking spots in the Bay Area. Some of the trails can take the better part of a day, but every trail is well worth it.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Fort Point",
		"lat": 37.810603,
		"lng": -122.476999,
		"review": "When you alter the blueprints for the world's greatest bridge to throw in a steel arch in order to avoid demolishing a place just because it's beautiful, it must be a special place.<br/><br/>Good old Fort Point defended our bay during the Civil War--no invasions were even attempted thanks to the intimidating might of the fort.<br/><br/>I've never grown tired of trips to Fort Point. It is packed with history and always fun to explore.",
		"wiki": "0",
		"fs": "1",
		"category": ["explore", "outdoor"]
	},
	{
		"name": "San Francisco Bay",
		"lat": 37.818244,
		"lng": -122.436079,
		"review": "If not for three courageous women in the 1960s forming the 'Save San Francisco Bay Association,' our magnificent bay would have been mostly if not totally filled in with landfill by now.<br/><br/>I grew up with a routine of Sunday morning sailboat trips around the bay with my relatives, always to different locations. One day it would be dropping anchor and rowing the dinghy over to Angel Island and another it would be heading through the Golden Gate just enough to get a feel of the ocean before tacking around to come back in to the bay's safety. I learned to love and respect the bay.<br/><br/>When I grew up and took sailing lessons for myself, I would learn all the nuances and challenges of the bay. It's considered one of the most challenging places on Earth to learn to sail. But worth it.",
		"wiki": "1",
		"fs": "0",
		"category": ["outdoor"]
	},
	{
		"name": "The Delta",
		"lat": 38.044898,
		"lng": -121.796169,
		"review": "I spent countless weekends as a kid going out on boats of all sizes for Delta explorations. From waterskiing, to fishing, to island hopping, and to exploring the mothball fleet, the Delta has just become a small part of me. There are beautiful spots and ugly spots, but a trip on the Delta always seems to be an adventure.",
		"wiki": "0",
		"fs": "0",
		"category": ["outdoor"]
	},
	{
		"name": "Point Reyes National Seashore",
		"lat": 38.069887,
		"lng": -122.917847,
		"review": "Point Reyes is one of the natural jewels of the Bay Area. Our big 5th grade trip was in a camp in Point Reyes where we learned to appreciate the majesty of tide pools, beaches, and trails. Although I've only camped in Point Reyes a few times since, there's plenty to do during a day drive. We never miss the lighthouse and beaches and occasionally indulge in some fresh oysters.",
		"wiki": "1",
		"fs": "0",
		"category": ["outdoor", "explore"]
	},
	{
		"name": "Oracle Arena",
		"lat": 37.750261,
		"lng": -122.203004,
		"review": "Home of the NBA Champion Golden State Warriors! None of the arena's shortcomings or horrible concert acoustics even matter after that.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Candlestick Park",
		"lat": 37.713648,
		"lng": -122.386180,
		"review": "The 49ers are gone. Out of San Francisco. They may as well be called the Santa Clara 49ers now. They’ve got a shiny, high-tech wonderland to play in, where the focus seems to be on everything but the game. Fans are literally dying in the heat, traffic is worse than ever, and the 49ers are off to a grim start in the new digs.<br/><br/>In late 2014, I had the opportunity to photograph good old Candlestick Park in detail during the early stages of light demolition work. From the dark depths of the musky under passages to the soaring sky-high press box, and from the cramped locker rooms to the cold secret jail cells, I got it all. In a few decades, who knows–the whole collection might be interesting to someone. I’ll just tuck the photos away until then.<br/><br/>For me, it was my final goodbye to the battlegrounds of legends that I grew up idolizing. Candlestick was my choice destination on many a Sunday afternoon from the early 1980s to 2013 (and a few lucky Monday night games where I snuck out of school early to head to the Stick). Of course our Giants abandoned the crumbling, moss-covered structure years ago, and I don’t really miss the Stick from a baseball perspective. They’re in a better place now.<br/><br/>A month after my photo spree of the empty Stick, I sent my drone skyward for one final peek inside. It looks like there are quite a few seats left (you can buy a pair for your man cave). The nearly-dead turf has sprung back to life from the recent downpours. I interweaved a few of my 1000+ photos of the empty complex with the drone’s eye view.<br/><br/>I've been filming the demolition progress every Sunday morning in 4k video from my DJI Inspire drone. The video will appear on my website when demolition is complete.",
		"wiki": "1",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Bernal Heights Park",
		"lat": 37.743237,
		"lng": -122.414461,
		"review": "One of my favorite spots for a light hike. The view is truly spectacular and never gets old.",
		"wiki": "0",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "San Francisco Zoo",
		"lat": 37.732953,
		"lng": -122.503148,
		"review": "As much as the zoo has changed over the years, there are plenty of old 1930s depression-era WPA buildings still intact which are always interesting to explore. And the Little Puffer steam train, the hardest working machine in all of San Francisco, is a must-do on each visit. And the 1921 Dentzel menagerie is one of San Francisco's three antique carousels, but is eerily quiet with no music playing.<br/><br/>The animals themselves are the standard zoo assortment. Of course, the birth of the American bald eagle named Stephen Colbert in 2006 was the zoo's all-time biggest star!",
		"wiki": "1",
		"fs": "1",
		"category": ["fun", "kids"]
	},
	{
		"name": "Oakland Zoo",
		"lat": 37.749781,
		"lng": -122.145738,
		"review": "The Oakland Zoo always makes for a fun few hours. My favorite animal from when I was a kid was the Siamang Gibbon who had the loudest voice I've ever heard. He was always our first stop on any visit.",
		"wiki": "1",
		"fs": "0",
		"category": ["fun", "kids"]
	},
	{
		"name": "Black Diamond Mines",
		"lat": 37.985002,
		"lng": -121.855335,
		"review": "One of my favorite mountain biking spots as long as it's not mid-afternoon in the middle of summer. Great place to just set out on a hike too. There's plenty to explore, including the old graveyard up on the hill. And, of course, a tour of the Hazel Atlas mines is a must-see at least once.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "The Trappist",
		"lat": 37.800497,
		"lng": -122.27420,
		"review": "My Belgian blood draws me to this place like a mosquito to a bug light. If you're looking for some Bud Light, this is not the place for you.<br/><br/>Possibly the best place for beer in the entire Bay Area. Although named after the legendary trappist monastery brewers in Belgium, the Trappist serves up a variety of kick-butt beers from around the world.<br/><br/>The atmosphere and food are top-notch as well. This is my happy place!",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Craneway Pavilion",
		"lat": 37.909424,
		"lng": -122.35864,
		"review": "The Craneway is the old 1931 Ford Motor plant repurposed into a state-of-the-art venue for concerts and other special events. The view of the bay and city skyline is stunning, especially in the evening.<br/><br/>The premier event held here, in my opinion, is the pre-Independence Day fireworks show, which has become an annual event on July 3. The East Bay Symphony orchestra plays for a few hours while you sit on your blanket and picnic inside the huge building. Then, everyone shuffles outside to the edge of the bay for the fireworks show.<br/><br/>Right next door is the Rosie the Riveter museum, a very well put together tribute to the women workers of WWII.",
		"wiki": "1",
		"fs": "1",
		"category": ["arts", "fun"]
	},
	{
		"name": "Livermore Municipal Airport (LVK)",
		"lat": 37.695962,
		"lng": -121.818124,
		"review": "My home base airport for many years when I was a member of the Flying Particles Club. My plane of choice was N9658K which I flew all over the state, including many 'Bay Tour' routes over the bay, over the Golden Gate Bridge, and then down the Pacific Coastline down to Half Moon Bay for lunch.",
		"wiki": "0",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Half Moon Bay Airport",
		"lat": 37.513858,
		"lng": -122.495023,
		"review": "Among my favorite airplane destinations in Northern California. Half Moon Bay's got it all: beauty, location, and great places to eat. I usually fly straight down the coast to get here, which makes for a relaxing flight with incredible views, rather than deal with hectic SFO and OAK airspace. The winds sometimes come down the coast so strong that the plane barely moves when the wheels touch down. It freaks my passengers out a bit, but it's not a tough airport to land at.<br/><br/>My friends often like to eat at the Half Moon Bay Brewery, which is a short walk from the airfield. I drool over the sight of fresh beer while I sip on my iced tea. After all, someone's got to fly us back home.",
		"wiki": "1",
		"fs": "0",
		"category": ["fun"]
	},
	{
		"name": "Downtown Palo Alto",
		"lat": 37.446022,
		"lng": -122.161488,
		"review": "A great destination to go stroll around, shop, and eat. It's still got a small-town feel.",
		"wiki": "0",
		"fs": "1",
		"category": ["fun"]
	},
	{
		"name": "Kirby Cove",
		"lat": 37.827192,
		"lng": -122.490005,
		"review": "The best little secluded beach in the Bay Area. It's a bit of a hike down from the road, but worth it. Once on the beach, you find yourself practically right under the Golden Gate Bridge with an incredible view of the NW side of the city all the way to downtown San Francisco.<br/><br/>I've come down here at night with a ton of photo equipment strapped to my back to capture the super moon rising over the city. A sight I'll never forget!",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "The Englander",
		"lat": 37.721993,
		"lng": -122.153213,
		"review": "I spent years stuffing my face and guzzling beer here on a weekly basis after a routine grueling bike ride around Redwood Road. The Englander was the place where I was introduced to Pliny the Elder IPA and it's been a love affair ever since.<br/><br/>This is one of the best sports bars in the Bay Area and a great place to watch pro bike racing on the big screen.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Taqueria Los Pericos",
		"lat": 37.722952,
		"lng": -122.153490,
		"review": "No need to go to the Mission District if you're in the East Bay when you've got Los Pericos. Delicious, huge Mission-style burritos good to the last bite. The make some mean fish tacos too, not that I would pass up a burrito for tacos.",
		"wiki": "0",
		"fs": "1",
		"category": ["grub"]
	},
	{
		"name": "Lake Chabot Regional Park",
		"lat": 37.715782,
		"lng": -122.102281,
		"review": "I've ridden my bike around this lake close to 100 times up on Redwood Rd/Skyline. It wasn't until years later that I finally took a trip down to see what the lake was all about. We rented a row boat and had a nice (albeit exhaustingly long) row around the lake, which made for a nice day. Make sure to have plenty of food and drink aboard.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	},
	{
		"name": "Lawrence Hall of Science",
		"lat": 37.879290,
		"lng": -122.246761,
		"review": "A great hands-on place to learn all about science. I came here many times as a kid. Some of the stuff seemed a bit on the 'grown-up' side when you're a kid but I was learning all along. There used to be experiments you could do with mazes and live mice which were always fun. The whole place has improved greatly over the years and is a great place for kids now. And go scale the whale when you're done!",
		"wiki": "1",
		"fs": "1",
		"category": ["sci-tech"]
	},
	{
		"name": "Lafayette Reservoir",
		"lat": 37.884683,
		"lng": -122.139235,
		"review": "When I was a lad, this seemed to be the default destination for the YMCA summer camp when they couldn't come up with anywhere else to go. We spent so many days fishing on the lake, rowing, and playing capture the flag in the poison oak-infested hills. I lost count of how many times the camp counselors had to dig fishing hooks out of kids' arms from wild-casting. We'd camp for the night every once in a while, with plenty of Kumbaya to go around.<br/><br/>I usually head up here now for a change-of-pace jog around the lake.",
		"wiki": "1",
		"fs": "1",
		"category": ["outdoor"]
	}
];