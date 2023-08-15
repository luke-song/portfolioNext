import { useContext } from 'react';
import Poster from '../../public/img/bg-video-poster.jpg';
import NavContext from '../context/navContext';
import AnimationText from './AnimationText';
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === 'home' ? 'active' : ''}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source
              src={require('../../public/img/video.mp4')}
              type="video/mp4"
            />
            <source
              src={require('../../public/img/video.mp4')}
              type="video/ogg"
            />
          </video>
        )}
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : 'img/leftimage-dark.jpg'}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            {`I'm`} a dedicated Front End Engineer specializing in crafting
            clean and efficient code. With experience at InterviewRocket and
            Identity, I've led the development of intuitive user interfaces and
            spearheaded the creation of innovative solutions. Proficient in
            JavaScript, TypeScript, React, Node.js and Next.js, I'm passionate
            about turning ideas into seamless digital experiences.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav('about')}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav('work')}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
