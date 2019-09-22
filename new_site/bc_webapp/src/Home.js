import './Home.css';
import React from 'react';
import './Assets/coding.png';
import './Assets/slack.png';
import './Assets/right-arrow.png';
import './Assets/experience.png';



const Home = props => {
    return (
      <div>
        <div className="home-container">
            <div>
              <img className="logo" src={require("./Assets/bc-logo-NEW.png")} alt='logo' />
            </div>
        
          <div className="flow-container">
              {/* Join Slack Section */}
              <div>
                  <a href="http://slack.bootcamperscollective.com" rel="noopener noreferrer" target="_blank">
                    <img className="coding-image" src={require("./Assets/slack.png")} alt='slack'/>
                  </a>
                  <div className="sub-title"> 
                    <h3>Join us on Slack</h3> 
                  </div>
              </div>
              {/* Arrow Section */}
                <div className="arrow-div">
                    <img className="arrow-image" src={require("./Assets/right-arrow.png")} alt='rightarrow'/>
                </div>
              {/* Code of Projects Section */}
              <div>
                  <a href="https://github.com/bootcamperscollective" rel="noopener noreferrer" target="_blank"> 
                    <img className="coding-image" src={require("./Assets/coding.png")} alt='coding'/>
                  </a>
                  <div className="sub-title">
                      <h3>Start coding on community projects</h3>
                  </div>
              </div>
              {/* Arrow Section */}
              <div className="arrow-div">
                  <img className="arrow-image" src={require("./Assets/right-arrow.png")} alt='rightarrow'/>
              </div>
              {/* Build Your Portfolio Section */}
              <div>
                  <img className="coding-image"src={require("./Assets/experience.png")} alt='experience' />
                  <div className="sub-title">
                      <h3>Build your portfolio</h3>
                  </div>
              </div>
          </div>
        </div>
    </div>
   
    );
};

export default Home;
