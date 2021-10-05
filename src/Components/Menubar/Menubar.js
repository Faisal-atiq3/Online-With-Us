import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'
const Menubar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="course">Course</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="details">Details</Link>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Menubar;