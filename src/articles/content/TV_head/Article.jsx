import '../../default.css';
import './theme.css'
import React from "react";
import { useScrambledTitle } from '../../ScrambledTitle';

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="TV_head">
      <Navbar />
     <article>
      <div className="cover">
        {useScrambledTitle(meta.title)}
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/mad.gif')}></img>
        <hr/>
      </div>
      <main>  
        <iframe src="https://www.youtube.com/embed/yEIA7uc1x5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>It all started with me finding this neat video on youtube. I recommend you watch it yourself as I took a lot of advice from it. I downloaded their tutorial files and used them as a reference frequently at the beginning</p>

        <p>I saw a couple of different TV heads previously while doom scrolling, such as the one person from <a href='https://www.youtube.com/watch?v=2HmKYEZgkSY'>Jschlatt's show and tell</a> which has the cool feature of the controls being hidden in the gloves. I tried looking up how to do it but the person who made the cosplay is silent as a partisan so I ended up doing something more boring</p> 
        <h2>The helmet</h2>
        <p>I happen to own a pretty sweet 3D printer gifted to me from a program I participated in and as a result, decided that printing the case would be the best. One glaring issue arose immediately. That of my lack of skill with 3D modeling. I am gonna be honest. Either the 3D model files weren't in the tutorial zip from the youtube video or I am actually 0/200 vision because I did not find the 3D model they used in the video. That is why I decided to make my own 3D model despite never having seriously done it. I decided to use FreeCAD and my experience has been mixed at best. I don't know enough about CAD to give a real review but the process of trying to do anything outside of making a sketch and then padding it felt like pulling teeth</p>
        <img className='thumbnail' src={require('./images/big_head.jpg')}></img>
        <span>Accurate representation of the dimensions of my head</span>
        <p>The printer bed is not large enough to print anything I can fit my head in, so the helmet was done in many smaller parts. Each side is printed in 4 parts that are later hot glued together using attachment pieces I printed. I also added baby foam around the head hole™ like in the video so that I don't slice my throat wearing this thing.</p>
        <h2>The screen</h2>
        <p>One of the reasons I felt like doing this is because I already have the LED matrix used for the face in the video so it wouldn't be too hard to recreate. That was what I hoped for. Unlucky, because the reason I didn't use the screen for anything is because it wasn't working. I bought a <a href='https://www.adafruit.com/product/2345'>HAT</a> for a Raspberry Pi I own and tried it out a year or so ago maybe. It just didn't work. The screen just unceremoniously goes blank and nothing happens no matter what I tried. It could have been one of several things going wrong. The HAT had to be soldered first so I could have messed something up. I didn't clean flux after soldering and I heard that could cause problems. The HAT or the LED matrix could have just been shipped to me already busted.</p>
        <img className='thumbnail' src={require('./images/HAT.jpg')}></img>
        <span>The suspect in question</span>
        <p>Sick and tired of all this guessing I just bought what Minbitt used in the video. A Matrixportal M4. And it worked great ! Made me wonder what the hell the HAT used a second charger for if the M4 just ran off of a USB. It was very easy to use and saved me much Advil in the process</p>
        <h2>The software</h2>
        <p>I tried running Minbitt's code and it worked fine but I wanted more. The controls using an accelerometer were quite inconvenient and I wanted to change it since I planned on going to a con with it. (Also the code was outdated compared to what's in the video I think). I saw that the M4 had Bluetooth Low Power, so I could control the board remotely from my phone. There is a weird problem with the board that causes it to go from 60fps 4k Ultra HD Dolby digital to 1fps if you are connected with BLE and that sucks. I dealt with the problem by ignoring it and just disconnecting from it when I didn't need to change faces</p>
        <p>The bluefruit BLE app I used has a control pad and it's got 4 arrows and 4 buttons. I used numbers to pick different faces/options and the arrows to pick between 3 different face sets and the options set, where I can control THE GLITCHES</p>
        <h2>THE GLITCHES</h2>
        <p>I love glitch visual effects. I think they look cool as hell and I wanted some of that on my TV head. Due to the limited number of buttons and me not wanting to change the effects periodically, I decided to set the helmet to automatic mode. This way different glitches would occur randomly. This would turn off when I manually change faces</p>
        <p>While making these I also found out the limitations of the Matrixportal M4. These visual effects aren't instant and there is a visible "scanline" of sorts which to me just adds to the aesthetic. Some glitches I added are jitter, disappearing rows, random color rows, random palette, full screen garble before reset, and possibly something else I am forgetting. Partially inspired by the boombot screen from <a href='https://www.youtube.com/watch?v=DBDspsbNKRo'>this</a> video</p>
        <h2>The final product</h2>
        <img className='thumbnail' src={require('./images/head.png')}></img>
        <p>I think it looks quite sweet. Overall I am happy with what I got and putting this hunk of junk together was a lot of good experience</p>
      </main>
    </article>
    <Footer />
    </div>
  );
}

export default Hi;
