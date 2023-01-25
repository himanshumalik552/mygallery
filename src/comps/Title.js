import React from 'react';
import logo from '../assets/logo.png'
const Title = () => {
  return (
    <div className="title">
      <image src={logo} alt='logo'/>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;