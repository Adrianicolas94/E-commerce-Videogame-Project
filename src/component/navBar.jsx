import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleDown, ShoppingCart } from 'phosphor-react';
import './navBar.css';
import logo from '../assets/logo.png';
import video from '../assets/video.mp4';

export const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  const handleShopClick = () => {
    const scrollHeight = window.innerHeight;
    const scrollOptions = {
      top: scrollHeight,
      behavior: 'smooth',
    };
    window.scrollTo(scrollOptions);
  };

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`heroPage ${scroll ? 'scroll' : ''}`}>
      <div className="overlay3"></div>
      <video src={video} autoPlay loop muted />

      <div className={`navBar ${scroll ? 'scroll' : ''}`}>
        <div className="logo">
          <img id="logoLevelUp" src={logo} alt="" />
          <div className="name">
            <h3>
              Level<span>up</span>
              <br />
              Marketplace<br />
            </h3>
          </div>
        </div>

        <div className="links">
          <Link onClick={handleShopClick} to="/">
            Shop
          </Link>
          <Link onClick={handleShopClick} to="/cart">
            {' '}
            <ShoppingCart size={25} />
            {' '}
          </Link>
        </div>
      </div>

      <div className="text">
        <h1>
          Unlock the power of play with our vast selection of <br />
          video games<br />
        </h1>
      </div>

      <div className="scrollDownArrow">
        <Link id="scrollButton" onClick={handleShopClick} to="/">
          {' '}
          <ArrowCircleDown size={50} />
          {' '}
        </Link>
      </div>
    </div>
  );
};