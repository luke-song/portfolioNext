import { useContext } from 'react';
import NavContext from '../context/navContext';
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === 'about' ? 'active' : ''}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          Focuses on writing clean & efficient and readable & reusable code.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a dedicated Front End Engineer specializing in crafting
              clean and efficient code. With experience at InterviewRocket and
              Identity, I've led the development of intuitive user interfaces
              and spearheaded the creation of innovative solutions. Proficient
              in JavaScript, TypeScript, React, Node.js and Next.js, I'm
              passionate about turning ideas into seamless digital experiences.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Luke
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Song
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>13
                    December 1997
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>4 years
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+1 408
                    218-5349
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    hyeonminsong7@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    San Jose, CA
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a
                href="/resume/LukeResume(08_09_2023).pdf"
                className="btn btn-resume"
              >
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Jan 2023 - Current
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Front End Engineer
                        <span className="separator" />
                        <span className="font-weight-700">
                          Interview Rocket
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Led the front-end development of InterviewRocket using
                        Next.js, creating an intuitive user interface for
                        real-time, AI-powered mock interviews. Seamlessly
                        integrated frontend with Python backend via WebSockets,
                        ensuring smooth user interactions and conversational
                        flow with AI agents.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2022 - Jan 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Front End Engineer
                        <span className="separator" />
                        <span className="font-weight-700">Identity</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Spearheaded the development of the Gateway v2 Protocol
                        (Gv2), encompassing a Rust program, TypeScript client
                        service, and exhaustive documentation. Engineered an
                        internal analytics tool using React, Recoil, and Chakra
                        UI, enhancing visibility into gateway token usage.
                        Collaborated with the CTO and senior developers,
                        achieving 90% test code coverage for the DID-SOL and
                        Cryptid projects using Mocha and Jest.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        August 2019 - May 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Full Stack Developer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Architect, developed & shipped production ready web apps
                        for clients. Designed scalable databases, controllers,
                        component architecture, and implemented client & admin
                        applications using NodeJS & AWS.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2017-2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Software Engineering
                        <span className="separator" />
                        <span className="font-weight-700">
                          San Jose State University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>Graduated Cum Laude</p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Blockchain Professional
                        <span className="separator" />
                        <span className="font-weight-700">GBSA</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Engaged in a rigorous and transformative two-month
                        bootcamp focused on mastering smart contract
                        development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: '100%' }}
                />
                <span className="percent" style={{ right: 'calc(0% - 21px)' }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: '100%' }}
                />
                <span className="percent" style={{ right: 'calc(0% - 21px)' }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: '100%' }}
                />
                <span className="percent" style={{ right: 'calc(0% - 21px)' }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">typescript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: '75%' }}
                />
                <span className="percent" style={{ right: 'calc(25% - 21px)' }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">react</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: '90%' }}
                />
                <span className="percent" style={{ right: 'calc(10% - 21px)' }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">next.js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: '85%' }}
                />
                <span className="percent" style={{ right: 'calc(15% - 21px)' }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">node.js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: '70%' }}
                />
                <span className="percent" style={{ right: 'calc(30% - 21px)' }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">redux</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: '75%' }}
                />
                <span className="percent" style={{ right: 'calc(25% - 21px)' }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">sql</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: '80%' }}
                />
                <span className="percent" style={{ right: 'calc(20% - 21px)' }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
