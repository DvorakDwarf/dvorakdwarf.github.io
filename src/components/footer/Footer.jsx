import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="mid">
        <div className="img-wrapper">
          {/* <img src={require('../../images/n.gif')}></img> */}
        </div>
        <div className='love'>
          <span>Made with love</span> 
          <span>by</span>
          <span>Histidine Dwarf</span> 
        </div>
        
        <div className="img-wrapper">
          {/* <img className='right-gif' src={require('../../images/n.gif')}></img> */}
        </div>
      </div>
      <div className="_8831">
        <a href="https://cyber.dabamos.de/88x31/">
          <img src={require('../../images/88x31.gif')} title="the literal source of my buttons.">
          </img>
          </a>
        <iframe src="//incr.easrng.net/badge?key=histidinedwarf" title="increment badge" width="88" height="31" frameborder="0">
        </iframe>
        <a href='https://yugoslavia.best/'> <img src={require('../../images/blinchik.gif')}></img> </a>
        {/* <img src={require('../../images/delete-twitter.gif')}></img> */}
        <img src={require('../../images/anydamn.gif')}></img>
        <img src={require('../../images/webpassion.png')}></img>
      </div>
    </footer>
  );
}

export default Footer;
