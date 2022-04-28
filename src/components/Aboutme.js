import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../images/IMG_0660.jpeg'
function Aboutme() {
    return (
        <div>
            <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>ABOUT</h1>
                            <h2>JEROME MCCLARIN</h2>
                        </div>

                    </div>
                    
                    <p>My name is Jerome McClarin and I am a full-stack web development student based out of Philadelphia.  I specialize in HTML, CSS, and JavaScript. when I'm not coding or working, I'm usually playing video games. My ultimate goal is to make my own video game. So becoming a web developer and learning to code is my first step in that journey.</p>
                </div>
                <div class="col-lg-6">
                    <img src={ProfilePic} alt="Profile"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Aboutme