import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className='header'>
      <h1>
        QuackyType <img src={logo} width="30px" height="30px" alt="logo" />
      </h1>
      <span className='sub-header'>
        created by Minjun Kwak
      </span>
    </div>
  )
}

export default Logo