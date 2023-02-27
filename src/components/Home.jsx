import React, { useState } from 'react'
import '../css/Home.css';
import profile from '../assets/123.jpg'
import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
// rafce
const Home = (props) => {


  const [c, Setc] = useState(props.checks);
  React.useEffect(() => {
    console.log(window.screenY);
    window.addEventListener('scroll', (event) => {
      if (window.screenY <=100) {
        Setc({ check1: false, check2: true, check3: false, check4: false });
      }
      else if (window.screenY >= 400 && window.screenY < 700){
        Setc({ check1: false, check2: true, check3: false, check4: false });
      }
      else if (window.screenY >= 700 && window.screenY <=800){
        Setc({ check1: false, check2: false, check3: true, check4: false });
      }
      else if (window.screenY > 800) {
        Setc({ check1: false, check2: false, check3: false, check4: true});
      }
    });
  }, [window.scrollY]);

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
          <p onClick={() => { props.clicks.click2(); Setc({ check1: false, check2: true, check3: false, check4: false }) }}>SKILLS</p>
          <p onClick={() => { props.clicks.click3(); Setc({ check1: false, check2: false, check3: true, check4: false }) }}>PROJECTS</p>
          <p onClick={() => { props.clicks.click4(); Setc({ check1: false, check2: false, check3: false, check4: true }) }}>ABOUT</p>
        </div>
      </div>
      <div class="pagination">
        <input id="dot-1" type="radio" name="dots" onClick={()=>{props.clicks.click1(); Setc({check1:true, check2: false, check3: false,check4: false})}} checked={c.check1}/>
        <label htmlFor="dot-1"></label>
        <input id="dot-2" type="radio" name="dots" onClick={() => { props.clicks.click2(); Setc({ check1: false, check2: true, check3: false, check4: false }) }} checked={c.check2} />
        <label htmlFor="dot-2"></label>
        <input id="dot-3" type="radio" name="dots" onClick={() => { props.clicks.click3(); Setc({ check1: false, check2: false, check3: true, check4: false }) }} checked={c.check3} />
        <label htmlFor="dot-3"></label>
        <input id="dot-4" type="radio" name="dots" onClick={() => { props.clicks.click4(); Setc({ check1: false, check2: false, check3: false, check4: true }) }} checked={c.check4} />
        <label htmlFor="dot-4"></label>
      </div>
    </div>
  )
}

export default Home