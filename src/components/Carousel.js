import {Carousel} from 'react-bootstrap';
import React, { useState } from 'react';
import "./Carousel.css";
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill} from "react-icons/bs";
import { ThemeContext } from './contexts/theme';
import { useContext } from 'react';
import b1 from './images/black1.jpg'
import b2 from './images/black2.jpg'
import w1 from './images/white1.jpg'
import w2 from './images/white2.png'


function UncontrolledExample() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
    const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade variant="success" activeIndex={index} onSelect={handleSelect}>
      {!isDark && <Carousel.Item>
  <img
    className="imgs"
    src={w1}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3 className='lcolr'>RX TRAVELS</h3>
    <p className='lcolr'>Schedule your Tours</p>
  </Carousel.Caption>
</Carousel.Item>}
{isDark&& <Carousel.Item>
  <img
    className="imgs"
    src={b1}
    alt="First slide"
  />
  <Carousel.Caption  >
    <h3 className='dcolr'>RX TRAVELS</h3>
    <p className='lcolr'>Schedule your Tours</p>
  </Carousel.Caption>
</Carousel.Item>}
      {!isDark && <Carousel.Item>
        <img
          className="imgs"
          src={w2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='lcolr'>Contact Us</h3>
          <a href='/home'><FaLinkedin className='colr' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
          <a href='/home'><SiGmail className='colr' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
          <a href='/home'><FaGithub className='colr' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
          <a href="tel:9447567495"><BsFillTelephoneFill className='colr'/></a>
        </Carousel.Caption>
      </Carousel.Item>}
      {isDark && <Carousel.Item>
        <img
          className="imgs"
          src={b2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='dcolr2'>Contact Us</h3>
          <a href='/home'><FaLinkedin className='colr' onClick={()=>{window.open("https://www.linkedin.com/in/roshan-xavier-1ab097214/")}}/></a>
          <a href='/home'><SiGmail className='colr' onClick={()=>{window.open("mailto:rxgody@gmail.com")}}/></a>
          <a href='/home'><FaGithub className='colr' onClick={()=>{window.open("https://github.com/ROSHANXAVIER")}}/></a>
          <a href="tel:9447567495"><BsFillTelephoneFill className='colr'/></a>
        </Carousel.Caption>
      </Carousel.Item>}
    </Carousel>
  );
}

export default UncontrolledExample;

