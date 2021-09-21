import React from 'react'
import $ from "jquery"
export default function Header() {
  const handleToggle = () => {
    $(".fa-hamburger").toggleClass("fa-times")
    $("nav").toggleClass("nav-toggle")
  }
  return (
    <header id="header">
    <nav>
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#special">special</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#dish">dish</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
    <div className="fas fa-hamburger" onClick={handleToggle}></div>
    <a href="#" className="logo"><img src="" alt="Deezah Bakes" /></a>
    </header>
  )
}
