import '../../default.css';
import React from "react";

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="wrapper">
     <article>
      <div className="cover">
        <h1>{meta.title}</h1>
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/example.png')}></img>
        <hr/>
      </div>
      <main>  
        <p>
          If you are looking for a description of how to use the program, please refer to 
          <a href='https://github.com/DvorakDwarf/fauxnix'> https://github.com/DvorakDwarf/fauxnix</a>
        </p>
        <p>
          I really like the idea of NixOS, just not using it. A central config is 
          the hottest thing invented since sliced bread. Being able to reproduce your 
          entire system from just one file is phenomenal. Being able to go to a previous
          generation when things go wrong is life-saving and single-handedly reduces the 
          annual number of computers thrown out of windows worldwide by half. However, I don't like how strict it is
          and how it forces you to do things the Nix way™. Installing things from github or any
          source other than Nixpkgs can get messy. I don't care about your nerd philosophy
          of perfect reproducibility and isolated packages, I just want to play the latest 
          osu!lazer version in peace. 
        </p>
        <p>
          Special shoutout goes to the aliens working on the Nix team who think that manually
          typing in the name of packages in <code>configuration.nix</code> as opposed to
          one CLI command was a good idea under any circumstance. I am not a sysadmin, I want to
          quickly add new programs and save them in my config. 
        </p>
        <p>
          The natural solution is for me to write this Nix wannabe program for a couple of 
          weeks and I think it works now. It does basically everything I want Nix to do for me.
          Writing the program was not a problem, trying to make a package from it absolutely was. 
        </p>
        <img src={require('./images/archlogo.png')}></img>
        <span>The arch in question</span>
        <p>
          I use Arch Linux and so naturally I wanted to create a package in the Arch User 
          Repository for other people to use. This involves writing a <code>PKGBUILD </code>
          file which describes how the installation works. The idea was also inspired by some
          random person who made an AUR package for my Infinite-Storage-Glitch. I thought it 
          couldn't be too hard.
        </p>
        <h2>It Was</h2>
        <p>
          Fauxnix is written in Python and I'm gonna be real, I didn't know it could be compiled.
          That was the first thing I had to figure out. I settled on using <code>setuptools. </code>
          I tried getting further along on my <code>PKGBUILD</code> progress but got stuck on 
          trying to understand where to place the files and how to make it run from PATH. The 
          former was answered by some good samaritans in the Arch Linux programming channel on discord.
          The latter drove me mad. You'd think such a common question would be very well known and have
          many direct first-page answers. Unfortunately I missed the page in <code>setuptools </code>
          docs that explain it and ask online for help.
        </p>
        <p>
          In the Python discord server, I was given an incorrect answer and then my question was closed.
          In the Arch Linux server, I was told an answer I explicitly was not interested in, followed by
          programs that write PKGBUILDS from PyPI packages, unrelated to the question.
        </p>
        <img src={require('./images/dumb.png')}></img>
        <span>I hate getting help online. At least ChatGPT wouldn't give you an answer you explicitly did not ask for</span>
        <p>
          I did eventually find what I was missing and figured it out. The exact details of 
          how to write a PKGBUILD for a python app I'll put in a separate article for those
          who struggled like me.
        </p>
      </main>
    </article>
    </div>
  );
}

export default Hi;
