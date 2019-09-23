import './Navigation.css';
import React from 'react';
// import { Link } from 'react-router';



const Navigation = props => {
    return (
        <div className="header-container">
        <div className="link-bar">
            <a className="link-button" routerLink="/home" routerLinkActive="active"><img className="small-logo" src={require("./Assets/bc-boot.png")}></img></a>
            <a className="link-button" routerLink="/about" routerLinkActive="active">Get Involved</a>
            <a className="link-button" routerLink="/hackathon" routerLinkActive="active">Hacktoberfest</a>
            <a className="link-button" routerLink="/testimonials" routerLinkActive="active">About Us</a>
            <a className="link-button" routerLink="" href="http://45.55.10.167/" target="_blank">Shop</a>
        </div>
        <div className="responsive-menu" ng-click="$ctrl.dropdown = !$ctrl.dropdown">
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
      </div>
   
    );
};

export default Navigation;
