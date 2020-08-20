import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';
import { Link } from 'react-scroll';
import { BiDownArrow } from 'react-icons/bi';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Typing speed={60} className="hero-title" loop>
          <h1 className="hero-title">
            {title || 'Hello World!'}
            <Typing.Delay ms={1000} />
            <br />
            {'My name is '}
            <span className="title-text">{name || 'Erica Liu.'}</span>
            <br />
            <span>{subtitle || "I'm a "}</span>
            <span className="title-text">
              Software Engineer.
              <Typing.Delay ms={800} />
              <Typing.Backspace count={18} />
              Veterinary Technician.
              <Typing.Delay ms={800} />
              <Typing.Backspace count={22} />
              Noodle Enthusiast.
              <Typing.Delay ms={800} />
              <Typing.Backspace count={18} />
              Terrible Gamer.
              <Typing.Delay ms={500} />
            </span>
          </h1>
          <Typing.Reset count={0} delay={5000} />
        </Typing>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={8500} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Learn more'}
              </Link>{' '}
              <BiDownArrow className="cta-btn-arrow" />
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
