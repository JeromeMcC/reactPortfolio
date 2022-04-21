import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>PORTFOLIO</h1>
                <h2>JEROME MCCLARIN</h2>
            </div>
        </div>
        

        <div className="row">
          <div className="col-lg-6"><a href="https://jeromemcc.github.io/-MH-Project-/" target="_blank">

            <img src="assets/images/projectMockup.png"/>
          </a></div>
          <div className="col-lg-6">
            <h1>GAME QUERY</h1>
            <p>A web application that allows a user to search for input a name of a video game an see all available results.</p>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://github.com/jeromemcc/-MH-Project" target="_blank">Github Link</a></button>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://jeromemcc.github.io/-MH-Project-/" target="_blank">Deploy Link</a></button>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-6"><a href="https://github.com/JeromeMcC/TeamProfileGenerator" target="_blank"> <img src="assets/images/Teamscreenshot.png"/>
          </a></div>
          <div className="col-lg-6">
            <h1>TEAM PROFILE GENERATOR</h1>
            <p>This application allows users to generate a detailed profile of a team of developers quickly and efficently.</p>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://github.com/JeromeMcC/TeamProfileGenerator" target="_blank">Github Link</a></button>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-6"><a href="https://jeromemcc.github.io/Web-Planner/" target="_blank">
            <img src="assets/images/dayPlanner.png"/>
          </a></div>
          <div className="col-lg-6">
            <h1>WEB PLANNER</h1>
            <p>A work day task planner that allows the user to plan their day ahead and it'll update based on the time left in the day.</p>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://github.com/JeromeMcC/Web-Planner" target="_blank">Github Link</a></button>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://jeromemcc.github.io/Web-Planner/" target="_blank">Deploy Link</a></button>
          </div>
        </div>
        
        
        <div className="row">
          <div className="col-lg-6"><a href="https://jeromemcc.github.io/PasswordGenie/" target="_blank">

            <img src="assets/images/passwordgenie.jpg"/>
          </a></div>
          <div className="col-lg-6">
            <h1>PASSWORD GENIE</h1>
            <p>This is a password generator which will help a user create a password based on a set of parameters they provide.</p>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://github.com/JeromeMcC/PasswordGenie" target="_blank">Github Link</a></button>
            <button type="button" className="btn btn-primary btn-sm btn-block" id="btn-yellow"><a href="https://jeromemcc.github.io/PasswordGenie/" target="_blank">Deploy Link</a></button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
    }

 export default Portfolio