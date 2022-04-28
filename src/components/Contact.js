import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const cardRow = {
        display: "inline",
    };
    const color ={
        color: "black",
    };
    return (
        <div>
        <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>CONTACT</h1>
            <h2>JEROME MCCLARIN</h2>
          </div>
        </div>
        </div>

        <div class="row" style={cardRow}>
          <div class="card text-center">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fas fa-phone fa-2x"></i> 215 971 6571</li>
              <li class="list-group-item"><i class="fas fa-envelope fa-2x"></i> <a href="mailto:Jerome.mcclarin@gmail.com" style={color}> Jerome.mcclarin@gmail.com</a></li>
              <li class="list-group-item"><i class="fas fa-file fa-2x"></i> <a href='' target="_blank" style={color}> Resume</a></li>
              <li class="list-group-item"><i class="fab fa-linkedin fa-2x"></i><a href="https://www.linkedin.com/in/jerome-mcclarin-496577226/" target="_blank" style={color}> LinkedIn</a></li>
              <li class="list-group-item"><i class="fab fa-github fa-2x"></i><a href="https://github.com/jeromemcc" target="_blank" style={color}> GitHub</a></li>
              
            </ul>
          </div>
          </div>
        </div>
    )
}
export default Contact