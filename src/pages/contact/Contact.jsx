import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Masthead from '../../components/masthead/Masthead'

import './contact.css';

function Contact() {
  return (
    <div className="wrapper">
    <Masthead />
    <Navbar />
    <div className='contacts'>
        <h1>WAYS TO CONTACT ME</h1>
        <h4>in order of preference</h4>
        <hr/>
        <ul>
          <li>Discord: @histidinedwarf</li>
          <li>Email: dvorakdwarf@gmail.com</li>
          <li>Fediverse: @histidinedwarf@wetdry.world</li>
          <li>Snail Mail</li>
          <li><a href='https://www.reuters.com/article/us-safrica-pigeon-idUSTRE5885PM20090910'>Pigeon</a></li>
          <li>Yell at me on the street</li>
        </ul>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;
