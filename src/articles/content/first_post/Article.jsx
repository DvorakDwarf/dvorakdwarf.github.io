import '../../default.css';
import '../../prism.css';
import Prism from "prismjs";
import React from "react";

class Codeblock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const code_snippet = `
app.get('/paths', (req, res) => {
fs.readdir(content_dir, (err, files) => {
    var response_arr = []
    files.forEach((i) => {
        var entry = new Object();
        const meta = require(content_dir + i + "/meta.json");

        entry.title = i;
        entry.date = meta.date;

        response_arr.push(entry);
    })

    response_arr.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    })

    res.send(response_arr);
  });
});  
  `

    return(
    <pre>
      <code className="language-javascript">
        {code_snippet}
      </code>
    </pre>);
  }
}


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
        <h1>GREAT SUCCESS</h1>
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/img1.png')}></img>
        <hr/>
      </div>
      <main>
      <p>If you are reading this then I managed to jury rig this thing to host my code:</p>      
        <img src={require('./images/PC.jpg')}></img>
        <span>The door is broken and can't be closed</span>
        <p>For the first note here I'll just record some things related to making this website</p>
        <p>I regret to inform you that this post was written in Vim.</p>
        <p>On top of trying to do webdev for the first time in my life I thought I might as well layer more stuff on top of it. I've heard Vim cultists rave about how it's the best thing since sliced bread and the transistor, but the final drop was sitting on a call with a person helping me figure out a code problem and seeing them use Vim keybindings. They looked like a wizard and now I wanna do the same. Also ricing. A big part was ricing. Same as with Linux. Entirely because I wanted a pretty desktop.</p>
        <p>About the website itself. I had never touched web anything until about 2 months ago. I was going and checking out other people's websites and decided that the time has come for me to get one of my own. If you are interested search "FBI no-fly list leak" and go from there. I won't hide the fact that one of the websites in the webring was a major inspiration for the look of the website. If they find this and get upset, hopefully, they'll finally answer my email months later.</p>
        <p>I quickly found out I dislike web programming. Everything is different. The HTML/CSS, the javascript monopoly, <a href='https://dayssincelastjavascriptframework.com/'>the frameworks</a>. It just feels like an entirely different activity from the programming I am used to. It's also a lot more visual for my liking. I generally dislike having to draw or make a UI, each activity shaving off a year of my young life. Despite that, I enjoyed doing HTML. It was surprisingly easy to get over. React, which is what I used for this site, was surprisingly worse. Brother, how hard can it be to let me read a directory :( I had written the world's smallest backend just to read a directory and then return it to React because it refuses to cooperate otherwise</p>
        <Codeblock />
        <span>Sorting by date so that react can pick 2 most recent articles to display on the home page</span>
        <p>As a complete noob, for some time I got stuck on how to store the articles. I didn't know whether this is where the backend starts and I get to managing a database or whether I am overthinking. Maybe there is another way of storing it. For example the developer I took zero inspiration from fetches their posts from cohost which is kinda smart.</p>
        <p>While I was thinking about this my SSD corrupted and ate all my code.</p>
        <img src={require('./images/old_website.png')}></img>
        <span>What could have been</span>
        <p>I ended up making a folder that contains folders representing articles once I got around to recreating the website. Each article folder has a <code>.jsx</code> for the content of the page, <code>.jsx</code> for the preview on the home page, images, used, as well as a <code>meta.json</code> that currently only contains the date I wrote the article but might eventually store more stuff. React reads all that and adjusts the website accordingly as I add more articles which is nice if I don't think about the time I could have saved doing this manually a few times.</p>
        <p>Overall I am ok with doing web development but the urge to write more rust and anything more low-level is inescapable and insatiable. Or do AI. AI is cool.</p>
      </main>
    </article>
    </div>
  );
}

export default Hi;
