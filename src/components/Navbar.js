import React from "react"

export default function Navbar() {
    return (
      <div>
        <ul>
            <li><a href="#home">Home</a></li>
  
  <li><a href="#contact">Contact</a></li>
  <li className="nav-about"><a className="active" href="#about">About</a></li>
</ul>
      </div>
        
      )
  }