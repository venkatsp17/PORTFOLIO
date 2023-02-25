import React from 'react'
import '../css/Home.css';
import profile from '../assets/123.jpg'
import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
// rafce
const Home = () => {
  return (
    <div className='main'>
      <div className='header'>
        <div className='child'>
          <a href={'https://www.linkedin.com/in/venkat-raman-s-p-481861205/'}><ImLinkedin2 size={25} style={{ color: "#ffffff" }} /></a>
          <a href={'https://github.com/venkatsp17'} ><ImGithub size={25} style={{ color: "#ffffff" }} /></a>
        </div>
        <div className='child'>
          <a href=""><AiOutlineMail size={20} style={{ color: "#ffffff" }} /></a>
          <p>Get in Touch</p>
        </div>
      </div>
      <div className='content'>
        <img className='circle' src={profile} alt='profile' />
        <p className='content1'>FULL  STACK  DEVELOPER</p>
        <h1>VENKAT RAMAN S P</h1>
        <div className='menu'>
          <p>SKILLS</p>
          <p>PROJECTS</p>
          <p>ABOUT</p>
        </div>
      </div>
      <div class="pagination">
        <input id="dot-1" type="radio" name="dots"/>
        <label htmlFor="dot-1"></label>
        <input id="dot-2" type="radio" name="dots" />
        <label htmlFor="dot-2"></label>
        <input id="dot-3" type="radio" name="dots" />
        <label htmlFor="dot-3"></label>
        <input id="dot-4" type="radio" name="dots" />
        <label htmlFor="dot-4"></label>
      </div>
    </div>
  )
}

export default Home