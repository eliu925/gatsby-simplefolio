import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <h1 className="about-wrapper_greeting">Hiya! I&apos;m Erica. </h1>
              <br />
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I am a <b>full stack engineer</b> based in New York City. I am also{' '}
                  <b>veterinary nurse</b> but my love for problem-solving and creativity led to the
                  change in my career path.
                </p>

                <p className="about-wrapper__info-text">
                  I enjoy learning and continue to challenge myself. I&apos;m naturally curious and
                  aspire to create quality applications that can serve different communities. I also
                  like to surround myself with people who are uplifting, eager to learn and teach,
                  and not afraid to fail.
                </p>

                <p className="about-wrapper__info-text">
                  Outside of work, I swoon over my four pups, slurp oodles of noodles like{' '}
                  <i>my life depends on it</i>, find solace in music, hike, and excel at losing
                  games (carry me please).
                </p>
                {resume && (
                  <span className="d-flex mt-3 resume-container">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1nTtGp1FJ3m77FbJAHsH1cqkq72m5ffyk/view?usp=sharing"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
