"use strict";(self.webpackChunkdevblog=self.webpackChunkdevblog||[]).push([[671],{6674:function(e,t,n){n.d(t,{c:function(){return o}});var a=n(9737),r=n(184);function o(e){var t=(0,a.b)({text:e,speed:1,overdrive:!1,scramble:10}),n=t.ref,o=t.replay;return(0,r.jsx)("h1",{className:"scrambled",ref:n,onClick:o})}},3671:function(e,t,n){n.r(t);n(697),n(7252),n(2791);var a=n(6674),r=n(2407),o=n(7900),s=n(184);t.default=function(){var e=n(7631),t=new Date(e.date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"2-digit"});return(0,s.jsxs)("div",{className:"BLOBGEN",children:[(0,s.jsx)(r.Z,{}),(0,s.jsxs)("article",{children:[(0,s.jsxs)("div",{className:"cover",children:[(0,a.c)(e.title),(0,s.jsx)("time",{children:t}),(0,s.jsx)("img",{className:"thumbnail",src:n(8967)}),(0,s.jsx)("hr",{})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)("p",{children:"Post brought to you by 38.0C fever"}),(0,s.jsx)("h1",{children:"Backstory"}),(0,s.jsx)("p",{children:'If you don\'t care, go to chapter "The Good Part\u2122" for the algorithm. Pics of the algorithm in the end too.'}),(0,s.jsxs)("p",{children:["I've been looking at some ",(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=-llumS2rA8I",children:"network graph videos"})," and some ",(0,s.jsx)("a",{href:"https://eightyeightthirty.one/",children:"network graph projects"})," (you should check this one out. Graphing the internet with 88x31) so I decided that if I made a library to graph things like this exactly the way I wanted I could use it for a bunch of different projects I had in mind."]}),(0,s.jsxs)("p",{children:["Hijinks ensue where I was looking at some different GUI libraries for this, I found that ",(0,s.jsx)("a",{href:"https://github.com/blitzarx1/egui_graphs",children:"somebody"})," basically did what I wanted already and",(0,s.jsx)("span",{style:{filter:"brightness(90%)"},children:" actually, there are a bunch of different ones other than egui. "}),(0,s.jsx)("span",{style:{filter:"brightness(70%)"},children:"Tauri is like Electron and so I could use HTML/CSS for layout and not learn a new thing"}),(0,s.jsx)("span",{style:{filter:"brightness(50%)"},children:" but also it felt convoluted and I really didn't need this much, I just wanted to display circles, lines, and text."}),(0,s.jsx)("span",{style:{filter:"brightness(30%)"},children:" I went back to egui to find out I still wasn't a fan and..."})]}),(0,s.jsx)("img",{src:n(6596),alt:"Yapping level is catastrophic"}),(0,s.jsx)("p",{children:"This whole process wasn't that exciting. Eventually, I got into bevy and now I can make spheres with lines between them, great success."}),(0,s.jsx)("img",{src:n(7182),alt:"A bunch of spheres connected with lines in 3D with their coordinates displayed under then. Quite ugly"}),(0,s.jsx)("span",{children:"How it looked when it first worked"}),(0,s.jsxs)("p",{children:["I was left to decide which idea that needed a network graph like this I wanted to do. A while ago I was trying to make a dwarf fortress legends mode like game. If you are unaware, Dwarf Fortress is an old colony simulation game with a lot of effective procedural storytelling and in-depth mechanics you can only get by having very simple graphics and decades to simulate everything down to dwarf eyelids and that mechanic then ",(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=VAhHkJQ3KgY",children:"goes on to cause cats to die of alcohol poisoning"}),". Rimworld and DF have a lot in common."]}),(0,s.jsxs)("p",{children:["Dwarf Fortress also has a separate mode called legends mode where you can see the world from an omniscient perspective and read about all the events playing out while the player isn't looking. Villagers becoming necromancers and then avenging some faction that wronged them, emergent storytelling like that. This is great fun to me and I wanted to make a game something like that but in ",(0,s.jsx)("span",{className:"SPACE",children:"SPACE"}),". Like a 0-player Stellaris game with more drama. Space Opera on demand. (There are more influences like Starsector, X4, Terra Invicta. Alas, I don't want to be here all day). It's helpful that a game like this shouldn't include a lot of graphics. DF legends mode is mostly text. I could make it with minimalist graphics and not mess it up. I've done a few things in Blender recently for fun but I am no artist at the moment."]}),(0,s.jsx)("p",{children:"I attempted this a while ago but I lost motivation eventually and left it on hiatus. I wanted to try it from scratch, starting with the map and visuals. For the game I wanted a procedurally generated map like Eve Online or Stellaris. A bunch of points (star systems) connected together with lines (some sci-fi highway doohickeys) What follows are some inspirations."}),(0,s.jsx)("img",{src:n(3352),alt:"Eve Online map"}),(0,s.jsxs)("span",{children:["Image from ",(0,s.jsx)("a",{href:"https://sov.space/",children:"https://sov.space/"})," October 11th, 2024"]}),(0,s.jsx)("img",{src:n(127),alt:"Prosperous Universe map"}),(0,s.jsxs)("span",{children:["Image from the game ",(0,s.jsx)("a",{href:"https://prosperousuniverse.com/",children:"Prosperous Universe"}),". Pictured is Antares in the bottom right corner, followed by West Antares, North Antares, and Northwest Antares"]}),(0,s.jsxs)("p",{children:['What makes an "interesting" star map to me is as follows:',(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"VERY LONG connections. You will need to open in new tab and zoom in on the first image. I am talking about connections like those going from Fraternity in the north to Pandemic Horde in the east or Test Alliance in the west."}),(0,s.jsx)("li",{children:"Chokepoints. Like the far connections but also like the bottommost green point in the second image. A system that makes a cross connecting 4 other systems."}),(0,s.jsx)("li",{children:"Dense and sparse sections. See the center of the first image or the empty hexagons in the second image."})]})]}),(0,s.jsx)("h1",{children:"Other Galaxy Generation Algorithms"}),(0,s.jsx)("p",{children:"While making this I was looking around if I could find more information about how other games did their galaxy generation, so here's a quick rundown."}),(0,s.jsx)("p",{children:"I couldn't find much on Eve Online other than the seed for the universe was 42. Cool. Allegedly there was an interview but \xaf\\_(\u30c4)_/\xaf. The universe was also manually edited which makes me spooked that the cool long connections I like are manually added and not procedural."}),(0,s.jsxs)("p",{children:["Frontier: Elite 2 if I understand it uses a grayscale image of the Milky Way. The brightness of a pixel determines how many sectors this area of space will have. Source: ",(0,s.jsx)("a",{href:"https://archive.is/lH5m8",children:"https://archive.is/lH5m8"})]}),(0,s.jsx)("p",{children:"I actually got to just straight up ask a developer from Prosperous Universe how they did their map. Prosperous Universe is an idle economy sim in space where players act as companies, colonize, and compete with each other by producing stuff. If you liked the spreadsheet part of Eve Online you will probably enjoy PRuN. I also thought that coding tools for the game is fun and actually useful. The unofficial API has a lot of data to work with. Maybe you can be the one bored astrophys major to finally make a program to calculate exact fuel cost from sector to sector outside of game. The game isn't popular enough to have perfect and thought-out tools for everything yet."}),(0,s.jsx)("img",{src:n(7345),alt:"Me: Hello. I happen to be writing a galaxy generation algorithm for a thing and it reminded me of PRuN. If it's not top secret, could you share what type of algorithm you based your generation on or whether it's something custom ?"}),(0,s.jsx)("img",{src:n(6617),alt:"Molp: Hey, our algorithm is a custom one, not based on anything 3rd party. Here is a rough outline: First we create the hexagonal sectors.  For each sector we create a number of stars and make sure that they are not too close to each other.  The type of star is random, but follows roughly the distribution of real star types.  We then create the FTL lanes.  Planets are also randomly created, larger stars have more planets. Depending on the location of the planet we generate the environment factors like size, gravity, albedo, gasseous vs rocky etc.  At the end we distribute resources on the planets.  Me: I am most interested in how nodes (star systems) on the map are generated and connected. Are the stars placed randomly in the hexagon while accounting for proximity with other stars ? Are they connected with FTL lanes just based on how close they are to another star ?  Molp: Yes, the stars are randomly placed, checking everytime that the distance to the existing stars is not too small. The FTL connections are created in two steps. In the first step we create the connections within the sector. To do so, we add a random connection at a time and check a few constraints: Larger suns can have more connections, smaller ones less. Loops are okay. We stop once all stars have a route to all other stars in the sector. Once the sectors have their connections we loop through the sectors and find the closest stars to the neighboring sectors. Again, we randomly connect the sectors and stop once all sectors can reach all other sectors to prevent islands that cannot be reached. Hope that helps \ud83d\ude42"}),(0,s.jsx)("p",{children:"After pondering on what knowledge I collected, I decided to write something myself, taking some advice from PRuN"}),(0,s.jsx)("h1",{children:"The Good Part\u2122"}),(0,s.jsxs)("p",{children:["An incredibly rough outline goes like this:",(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Create a bounding area"}),(0,s.jsx)("li",{children:"Place blobs in area"}),(0,s.jsx)("li",{children:"Connect blobs"})]})]}),(0,s.jsx)("h2",{children:"Bounding Area"}),(0,s.jsxs)("p",{children:["Decide what area you will be placing things inside of. I decided on a disc, so I made a function that picks a point inside of a disc. That is where we will be starting ",(0,s.jsx)("span",{className:"DA_BLOB",children:"the blob"}),"."]}),(0,s.jsx)("h2",{children:"Place blobs in area"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"DA_BLOB",children:"A blob"})," in this means a collection of nodes connected together. It's going to be the unit of our map. Creating ",(0,s.jsx)("span",{className:"DA_BLOB",children:"a blob"})," is the main part of the algorithm."]}),(0,s.jsxs)("p",{children:[(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Place the center node."}),(0,s.jsxs)("li",{children:["Place ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blob"})," members around the center. It can be any shape you want. I did a disc, sphere, and the surface of a sphere, with most ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blobs"})," being discs. ",(0,s.jsx)("br",{}),"If you want, you can extend ",(0,s.jsx)("span",{className:"DA_BLOB",children:"the blob"})," and I think it adds a lot to the look of the map. From the center, generate a point a bit further away. Repeat the process of placing the nodes like you did originally. You can have these extensions happen with random chance."]}),(0,s.jsx)("li",{children:"Connect all the nodes together. I did it as follows. Go through nodes one by one. Find X closest neighbours. Pick a random one and connect the two. Keep going until each node can reach every other node."}),(0,s.jsx)("li",{children:"The bare minimum required to connect all the nodes together usually looks quite barren, so I keep adding connections the same way until the average number of connections has reached some number."}),(0,s.jsxs)("li",{children:["Keep placing ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blobs"}),"."]})]}),"I wanted to shift to a side-tangent for a second. I have commited a GRAVE fumble on step 3. I made a terrible mistake of using a directed graph. That means that when I was adding connections and checking that nodes can reach each other, I was adding way too many than was required. At some point I was trying to find a better algorithm for connecting them because I thought that was the reason why ",(0,s.jsx)("span",{className:"DA_BLOB",children:"my blob"})," looked like a rat's nest. After I fixed that one thing I found out that I needed the fluffing 4th step."]}),(0,s.jsx)("h2",{children:"Connect blobs"}),(0,s.jsx)("p",{children:(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Pick a random ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blob"})," and create some connections to the other closest ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blobs"}),"."]}),(0,s.jsxs)("li",{children:["Keep doing it until each ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blob"})," center can reach every other center."]}),(0,s.jsx)("li",{children:"An additional fun thing: Drop random individual nodes far away from everything else and connect them. This will create the far-flung connections that I mentioned in the previous chapter. It's not really the same because there is a node in-between but it's good enough."})]})}),(0,s.jsx)("h2",{children:"Random other cool things that would be neat to implement"}),(0,s.jsxs)("p",{children:["Voids. Big empty spaces where no ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blobs"})," spawn. I added it to my program but I haven't really made use of it"]}),(0,s.jsxs)("p",{children:["One of the ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blob"})," types being a 3D projection of a 4D ",(0,s.jsx)("span",{className:"DA_BLOB",children:"blob"}),". It would be disproportionally difficult to make work but even as a piece of lore would be cool. I think that 4D elements being in games is incredibly awesome and I love it. See:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://youtu.be/u8LMyWcKL_c?t=239",children:"https://youtu.be/u8LMyWcKL_c?t=239"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=wyfYPDp2qME",children:"https://www.youtube.com/watch?v=wyfYPDp2qME"})})]})]}),(0,s.jsx)("p",{children:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u043e\u043b\u0446\u0435\u0432\u0430\u044f \u043b\u0438\u043d\u0438\u044f - type thing. A circular highway around the universe"}),(0,s.jsx)("h1",{children:"My implementation"}),(0,s.jsxs)("p",{children:["See: ",(0,s.jsx)("a",{href:"https://github.com/DvorakDwarf/bevy_nodemap",children:"https://github.com/DvorakDwarf/bevy_nodemap"})]}),(0,s.jsx)("p",{children:"It's rather slow but I will start speeding it up when I actually need it. It has a few different presets that were used for some pics below."}),(0,s.jsx)("h1",{children:"Gallery of cool"}),(0,s.jsxs)("div",{className:"gallery",children:[(0,s.jsx)("img",{src:n(7858),alt:""}),(0,s.jsx)("img",{src:n(3613),alt:""}),(0,s.jsx)("span",{children:"I especially like the vertical universe here ^^^"}),(0,s.jsx)("img",{src:n(7460),alt:""}),(0,s.jsx)("img",{src:n(6688),alt:""})]})]})]}),(0,s.jsx)(o.Z,{})]})}},9737:function(e,t,n){n.d(t,{b:function(){return s}});var a=n(2791);function r(e,t){return Math.floor(Math.random()*(t-e+1))+e}function o(e){var t=0;return t=2===e.length?r(e[0],e[1]):e[r(0,e.length-1)],String.fromCharCode(t)}var s=function(e){var t=e.playOnMount,n=void 0===t||t,s=e.text,i=void 0===s?"":s,c=e.speed,l=void 0===c?1:c,h=e.seed,d=void 0===h?1:h,u=e.step,m=void 0===u?1:u,p=e.tick,f=void 0===p?1:p,g=e.scramble,b=void 0===g?1:g,w=e.chance,y=void 0===w?1:w,x=e.overflow,j=void 0===x||x,v=e.range,k=void 0===v?[65,125]:v,I=e.overdrive,A=void 0===I||I,B=e.onAnimationStart,D=e.onAnimationFrame,L=e.onAnimationEnd,N=e.ignore,O=void 0===N?[" "]:N;"undefined"!==typeof window&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(m=i.length,y=0,A=!1);var P=(0,a.useRef)(null),T=(0,a.useRef)(0),F=(0,a.useRef)(0),_=1e3/(60*l),M=(0,a.useRef)(0),C=(0,a.useRef)(0),E=(0,a.useRef)([]),S=(0,a.useRef)(0),R=function(e,t){return O.includes(""+e)?e:t},H=function(){!function(){for(var e=0;e<m;e++)if(C.current<i.length){var t=C.current,n=r(0,10)>=10*(1-y);E.current[t]=R(i[C.current],n?b+r(0,Math.ceil(b/2)):0),C.current++}}(),function(){i.length<E.current.length&&(E.current.pop(),E.current.splice(i.length,m));for(var e=0;e<m;e++)E.current.length<i.length&&E.current.push(R(i[E.current.length+1],null))}(),function(){if(C.current!==i.length)for(var e=0;e<d;e++){var t=r(C.current,E.current.length);"number"!==typeof E.current[t]&&"undefined"!==typeof E.current[t]&&(E.current[t]=R(E.current[t],r(0,10)>=10*(1-y)?b||d:0))}}()},G=function e(t){l&&(T.current=requestAnimationFrame(e),function(){if(A)for(var e=0;e<m;e++){var t=Math.max(E.current.length,i.length);S.current<t&&(E.current[S.current]=R(i[S.current],String.fromCharCode("boolean"===typeof A?95:A)),S.current++)}}(),t-F.current>_&&(F.current=t,M.current%f===0&&H(),q()))},q=function(){if(P.current){for(var e="",t=0;t<E.current.length;t++){var n=E.current[t];switch(!0){case"number"===typeof n&&n>0:e+=o(k),t<=C.current&&(E.current[t]=E.current[t]-1);break;case"string"===typeof n&&(t>=i.length||t>=C.current):e+=n;break;case n===i[t]&&t<C.current:e+=i[t];break;case 0===n&&t<i.length:e+=i[t],E.current[t]=i[t];break;default:e+=""}}P.current.innerHTML=e,D&&D(e),e===i&&(E.current.splice(i.length,E.current.length),L&&L(),cancelAnimationFrame(T.current)),M.current++}},W=function(){M.current=0,C.current=0,S.current=0,j||(E.current=new Array(null==i?void 0:i.length))};return(0,a.useEffect)((function(){W()}),[i]),(0,a.useEffect)((function(){return cancelAnimationFrame(T.current),T.current=requestAnimationFrame(G),function(){cancelAnimationFrame(T.current)}}),[G]),(0,a.useEffect)((function(){n||(E.current=i.split(""),M.current=i.length,C.current=i.length,S.current=i.length,q(),cancelAnimationFrame(T.current))}),[]),{ref:P,replay:function(){cancelAnimationFrame(T.current),W(),B&&B(),T.current=requestAnimationFrame(G)}}}},7252:function(){},697:function(){},7182:function(e,t,n){e.exports=n.p+"static/media/blob.47a2d7ec700e354892f5.png"},8967:function(e,t,n){e.exports=n.p+"static/media/blobgenexample.0e6b0f5a329cf3d35114.png"},3352:function(e,t,n){e.exports=n.p+"static/media/influence.9b931eb7667947ed5edc.png"},7345:function(e,t,n){e.exports=n.p+"static/media/interview1.3a3449d37a5b5e51a055.png"},6617:function(e,t,n){e.exports=n.p+"static/media/interview2.9a4d92c4892caa86da62.png"},6688:function(e,t,n){e.exports=n.p+"static/media/preset3.726728b19ff3b740f642.png"},7460:function(e,t,n){e.exports=n.p+"static/media/preset4.4368a82cb28e1abd045a.png"},7858:function(e,t,n){e.exports=n.p+"static/media/preset6_1.d2ddf87f31c94bdd9b2b.png"},3613:function(e,t,n){e.exports=n.p+"static/media/preset_tube.82424e982f18501f331d.png"},127:function(e,t,n){e.exports=n.p+"static/media/prun.4c6390e953d730928209.png"},6596:function(e,t,n){e.exports=n.p+"static/media/yapping.259987fd3f0dfe6d9565.png"},7631:function(e){e.exports=JSON.parse('{"date":"2024-10-09T01:08:12.991Z","slug":"blobgen","title":"Blobgen: how to generate the universe in 3 mildly convoluted steps"}')}}]);
//# sourceMappingURL=671.b947fbc2.chunk.js.map