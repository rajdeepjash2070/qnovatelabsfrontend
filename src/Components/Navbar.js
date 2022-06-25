import React from 'react'
import "./Home.css"
import Logo from "./qunovatelablogo2.png"
const Navbar = () => {
  return (
    <div>
    <div>
    <nav class="navbar navbar-expand-lg  bg-dark navbar-light">
    <div class="container-fluid">
    <img src={Logo} class="d-inline-block align-text-top"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className='d-flex justify-content-end nav-right'>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
     
        <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="/" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about" >About</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/ourprograms" >Our Programs</a>
    </li>
    <li class="nav-item">
    <a class="nav-link " href="/bookyourfreesession" >Book Your Free Session</a>
  </li>
        
        </ul>
        </div>
      </div>
    </div>
  </nav>
  
    </div>
    </div>
  )
}

export default Navbar