import React from 'react'
import '../assets/css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg menim-navbarim ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Charles <br />BUSINESS CONSULTING</a>
    <button className="navbar-toggler my-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HOME
          </a>    
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " href="#">HOME VERSION ONE</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">HOME VERSION TWO</a></li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ABOUT US</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">OUR TEAM</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">FAQ'S</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">404</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">SHOP</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">SHOP DETAILS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">THIRD LEVEL MENU</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICE
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">SERVICE VERSION ONE</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">SERVICE VERSION TWO</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">SERVICE DETAILS</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PORTFOLIO
          </a>
          <ul className="dropdown-menu">
            
            <li><a className="dropdown-item" href="#">PROJECT</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">PROJECT DETAILS</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">BLOG LIST</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">BLOG GRID</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">BLOG DETAILS</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">CONTACT</a>
        </li>

       
        

        

        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar