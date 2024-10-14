import '../../default.css';
import './theme.css';
import React from "react";
// import Scramble from 'react-scramble'
import { useScrambledTitle } from '../../ScrambledTitle';

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

// function scrambled_title(text) {
//   return (
//     <h1 className='title'>
//       <Scramble
//         autoStart="true"
//         speed="fast"
//         preScramble="true"
//         text={text}
//         steps={[
//           {
//             action: '-',
//             type: 'forward',
//           },
//         ]}
//       />
//     </h1>
//   )
// }

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="BLOBGEN">
      <Navbar />
     <article>
      <div className="cover">
        {useScrambledTitle(meta.title)}
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/blobgenexample.png')}></img>
        <hr/>
      </div>
      <main>  
        <p>Post brought to you by 38.0C fever</p>
        <h1>Backstory</h1>
        <p>If you don't care, go to chapter "The Good Part™"for the algorithm. Pics of the algorithm in the end too</p>
        <p>
          I've been looking at some <a href='https://www.youtube.com/watch?v=-llumS2rA8I'>network graph videos</a> and some 
          <a href='https://eightyeightthirty.one/'> network graph projects</a> (you should check this one out. Graphing the internet with 88x31)
          so I decided that if I made a library to graph things like this
          exactly the way I wanted I could use it for a bunch of different projects I had in mind. 
        </p>
        <p>
          Hijinks ensue where I was looking at some different GUI libraries for this, I found that <a href='https://github.com/blitzarx1/egui_graphs'>somebody </a>
          basically did what I wanted already 
          and 
          <span style={{filter: "brightness(90%)"}}> actually, there are a bunch of different ones other than egui. </span> 
          <span style={{filter: "brightness(70%)"}}>Tauri is like Electron and so I could use HTML/CSS for layout and not learn 
          a new thing</span> 
          <span style={{filter: "brightness(50%)"}}> but also it felt convoluted and I really didn't need this much, I just wanted to display circles, lines, and text.</span> 
          <span style={{filter: "brightness(30%)"}}> I went back to egui to find out I still wasn't a fan and...</span>
        </p>
        <img src={require('./images/yapping.png')} alt="Yapping level is catastrophic"></img>
        <p>
          This whole process wasn't that exciting. Eventually, I got into bevy and now I can make spheres with lines between them, great success.
        </p>
        <img src={require('./images/blob.png')} alt="A bunch of spheres connected with lines in 3D with their coordinates displayed under then. Quite ugly"></img>
        <span>How it looked when it first worked</span>
        <p>
          I was left to decide which idea that needed a network graph like this I wanted to do. 
          A while ago I was trying to get a dwarf fortress legends mode like game. If you are unaware, Dwarf Fortress is an old colony simulation game
          with a lot of effective procedural storytelling and in-depth mechanics you can only get by having very simple graphics and decades to simulate 
          everything down to dwarf eyelids and that mechanic then <a href='https://www.youtube.com/watch?v=VAhHkJQ3KgY'>goes on to cause cats to die of alcohol poisoning</a>. 
          Rimworld and DF have a lot in common. 
        </p>
        <p>
          Dwarf Fortress also has a separate mode called legends mode where you can see the world from an omniscient perspective and see all the events playing out 
          while the player isn't looking. Villagers becoming necromancers and then avenging some faction that wronged them, emergent storytelling like that.
          This is great fun to me and I wanted to make a game something like that but in <span className='SPACE'>SPACE</span>. 
          Like a 0-player Stellaris game with more drama. Space Opera on demand. (There are more influences like Starsector, X4, Terra Invicta. Alas, I don't want to be here all day).
          It's helpful that a game like this shouldn't include a lot of graphics because DF legends mode is mostly text so 
          I could make it with minimalist graphics and not mess it up. I've done a few things in Blender recently for fun but I am no artist at the moment.
        </p>
        <p>
          I attempted this a while ago but I lost motivation eventually and left it on hiatus. I wanted to try it from scratch, starting with the map and visuals.
          For the game I wanted a procedurally generated map like Eve Online or Stellaris. A bunch of points (star systems) connected together with lines (some sci-fi highway doohickeys)
          What follows are some inspirations.
        </p>
        <img src={require('./images/influence.png')} alt="Eve Online map"></img>
        <span>Image from <a href='https://sov.space/'>https://sov.space/</a> October 11th, 2024</span>
        <img src={require('./images/prun.png')} alt="Prosperous Universe map"></img>
        <span>
          Image from the game <a href='https://prosperousuniverse.com/'>Prosperous Universe</a>. Pictured is Antares in the bottom right corner,
          followed by West Antares, North Antares, and Northwest Antares
        </span>
        <p>
          What makes an "interesting" star map to me is as follows:
          <ul>
            <li>
              VERY LONG connections. You will need to open in new tab and zoom in on the first image. 
              I am talking about connections like those going from Fraternity in the north to Pandemic Horde in the east or Test Alliance in the west.
            </li>
            <li>
              Chokepoints. Like the far connections but also like the bottommost green point in the second image. 
              A system that makes a cross connecting 4 other systems.
            </li>
            <li>
              Dense and sparse sections. See the center of the first image or the empty hexagons in the second image.
            </li>
          </ul>
        </p>
        <h1>Other Galaxy Generation Algorithms</h1>
        <p>
          While making this I was looking around if I could find more information about how other games did their galaxy generation, so here's a quick rundown.
        </p>
        <p>
          I couldn't find much on Eve Online other than the seed for the universe was 42. Cool. Allegedly there was an interview but ¯\_(ツ)_/¯. 
          The universe was also manually edited which makes me spooked that the cool long connections I like are manually added and not procedural.
        </p>
        <p>
          Frontier: Elite 2 if I understand it uses a grayscale image of the Milky Way. 
          The brightness of a pixel determines how many sectors this area of space will have. 
          Source: <a href='https://archive.is/lH5m8'>https://archive.is/lH5m8</a>
        </p>
        <p>
          I actually got to just straight up ask a developer from Prosperous Universe how they did their map. 
          Prosperous Universe is an idle economy sim in space where players act as companies, colonize, and compete with each other by producing stuff.
          If you liked the spreadsheet part of Eve Online you will probably enjoy PRuN. 
          I also thought that coding tools for the game is fun and actually useful. 
          The unofficial API has a lot of data to work with.
          Maybe you can be the one bored astrophys major to finally make a program to calculate exact fuel cost from sector to sector outside of game.
          The game isn't popular enough to have perfect and thought-out tools for everything yet.
        </p>
        <img src={require('./images/interview1.png')} alt="Me: Hello. I happen to be writing a galaxy generation algorithm for a thing and it reminded me of PRuN. If it's not top secret, could you share what type of algorithm you based your generation on or whether it's something custom ?"></img>
        <img src={require('./images/interview2.png')} alt="Molp: Hey, our algorithm is a custom one, not based on anything 3rd party. Here is a rough outline:
         First we create the hexagonal sectors. 
         For each sector we create a number of stars and make sure that they are not too close to each other. 
         The type of star is random, but follows roughly the distribution of real star types. 
         We then create the FTL lanes. 
         Planets are also randomly created, larger stars have more planets. Depending on the location of the planet we generate the environment factors like size, gravity, albedo, gasseous vs rocky etc. 
         At the end we distribute resources on the planets. 
         Me: I am most interested in how nodes (star systems) on the map are generated and connected. Are the stars placed randomly in the hexagon while accounting for proximity with other stars ? Are they connected with FTL lanes just based on how close they are to another star ? 
         Molp: Yes, the stars are randomly placed, checking everytime that the distance to the existing stars is not too small. The FTL connections are created in two steps. In the first step we create the connections within the sector. To do so, we add a random connection at a time and check a few constraints: Larger suns can have more connections, smaller ones less. Loops are okay. We stop once all stars have a route to all other stars in the sector.
         Once the sectors have their connections we loop through the sectors and find the closest stars to the neighboring sectors. Again, we randomly connect the sectors and stop once all sectors can reach all other sectors to prevent islands that cannot be reached.
         Hope that helps 🙂"></img>
         <p>After pondering on what knowledge I collected, I decided to write something myself, taking some advice from PRuN</p>
        <h1>The Good Part™</h1>
        <p>An incredibly rough outline goes like this: 
        <ol>
          <li>Create a bounding area</li>
          <li>Place blobs in area</li>
          <li>Connect blobs</li>
        </ol>
        </p>
        <h2>Bounding Area</h2>
        <p>
          Decide what area you will be placing things inside of. I decided on a disc, so I made a function that picks a point inside of a disc. 
          That is where we will be starting <span className='DA_BLOB'>the blob</span>.
        </p>
        <h2>Place blobs in area</h2>
        <p>
          <span className='DA_BLOB'>A blob</span> in this means a collection of nodes connected together. It's going to be the unit of our map. 
          Creating <span className='DA_BLOB'>a blob</span> is the main part of the algorithm.
        </p>
        <p>
        <ol>
          <li>Place the center node.</li>
          <li>
            Place <span className='DA_BLOB'>blob</span> members around the center. It can be any shape you want.
            I did a disc, sphere, and the surface of a sphere, with most <span className='DA_BLOB'>blobs</span> being discs. <br></br> 
            If you want, you can extend <span className='DA_BLOB'>the blob</span> and I think it adds a lot to the look of the map. 
            From the center, generate a point a bit further away.
            Repeat the process of placing the nodes like you did originally. 
            You can have these extensions happen with random chance.
          </li>
          <li>
            Connect all the nodes together. I did it as follows. Go through nodes one by one. Find X closest neighbours. 
            Pick a random one and connect the two. Keep going until each node can reach every other node.
          </li>
          <li>
            The bare minimum required to connect all the nodes together usually looks quite barren, so I keep adding connections 
            the same way until the average number of connections has reached some number. 
          </li>
          <li>Keep placing <span className='DA_BLOB'>blobs</span>.</li>
        </ol>
        I wanted shift to a side-tangent for a second. I have commited a GRAVE fumble on step 3. I use a graph datatype to store the nodes and edges.
        I made a terrible mistake of using a directed graph. That means that when I was adding connections and checking that nodes can reach each other,
        I was adding way too many than was required. At some point I was trying to find a better algorithm for connecting them because I thought
        that was the reason why <span className='DA_BLOB'>my blob</span> looked like a rat's nest. 
        After I fixed that one thing I found out that I needed the fluffing 4th step.
        </p>
        <h2>Connect blobs</h2>
        <p>
        <ol>
          <li>
            Pick a random <span className='DA_BLOB'>blob</span> and create some connections to the other closest <span className='DA_BLOB'>blobs</span>.
          </li>
          <li>Keep doing it until each <span className='DA_BLOB'>blob</span> center can reach every other center.</li>
          <li>
            An additional fun thing: Drop random individual nodes far away from everything else and connect them. 
            This will create the far-flung connections that I mentioned in the previous chapter.
            It's not really the same because there is a node in-between but it's good enough.
          </li>
        </ol>
        </p>
        <h2>Random other cool things that would be neat to implement</h2>
        <p>
          Voids. Big empty spaces where no <span className='DA_BLOB'>blobs</span> spawn.
          I added it to my program but I haven't really made use of it
        </p>
        <p>
          One of the <span className='DA_BLOB'>blob</span> types being a 3D projection of a 4D <span className='DA_BLOB'>blob</span>. 
          It would be disproportionally difficult to make work but even as a piece of lore would be cool.
          I think that 4D elements being in games is incredibly awesome and I love it. See:
          <ul>
            <li><a href='https://youtu.be/u8LMyWcKL_c?t=239'>https://youtu.be/u8LMyWcKL_c?t=239</a></li>
            <li><a href='https://www.youtube.com/watch?v=wyfYPDp2qME'>https://www.youtube.com/watch?v=wyfYPDp2qME</a></li>
          </ul>
        </p>
        <p>Московская колцевая линия - type thing. A circular highway around the universe</p>
        <h2>Gallery of cool</h2>
        <div className='gallery'>
          <img src={require('./images/preset6_1.png')} alt=""></img>
          <img src={require('./images/preset_tube.png')} alt=""></img>
          <span>I especially like the vertical universe here ^^^</span>
          <img src={require('./images/preset4.png')} alt=""></img>
          <img src={require('./images/preset3.png')} alt=""></img>
        </div>
      </main>
    </article>
    <Footer />
    </div>
  );
}

export default Hi;
