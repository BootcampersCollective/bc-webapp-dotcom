import './Home.css';
import React from 'react';


const Home = props => {

    return (
      <div>
        <div className="home-container">
            <div>
              <img className="logo" src={require("../Assets/bc-logo-NEW.png")} alt='logo' />
            </div>
        </div>
    </div>
   
    );
};

export default Home;
