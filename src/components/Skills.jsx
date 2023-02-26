import React, { useState } from 'react'
import '../css/Skills.css'
import { SiFlutter, SiCplusplus, SiPython, SiC } from "react-icons/si";
import { SiFlask, SiMongodb, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { SiFirebase, SiHackerrank, SiAndroidstudio } from "react-icons/si";
import { SiDjango, SiVisualstudiocode } from "react-icons/si";
import { SiReact, SiPycharm } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import Zoom from "react-reveal";


const Skills = () => {
  const [view, setview] = useState(1);
  return (
    <div className='last'>
      <Zoom><p className='fp'>Skills</p></Zoom>
      <div className='main1'>
        <Zoom left cascade> <div className={`${view === 0 ? "container1" : "container1 ab"}`}>
          <p>Technical Skills</p>
          <div className='flex2'>
            <SiC className='skill1' style={{ color: "#283593" }} />
            <SiCplusplus className='skill2' style={{ color: "#5E97D0" }} />
            <SiPython className='skill3' style={{ color: "ffde57" }} />
          </div>
          <p>Databases</p>
          <div className='flex1'>
            <div className='flex2'>
              <SiFirebase className='skill2' style={{ color: "#FFA611" }} />
              <SiMongodb className='skill2' style={{ color: "#092e20" }} />
            </div>
            <p>Coding Profiles</p>
            <div className='flex2'>
              <a href='https://leetcode.com/venkatsp17/'><SiLeetcode className='skill1' style={{ color: "black" }} /></a>
              <a href='https://auth.geeksforgeeks.org/user/venkatsnnyg/'><SiGeeksforgeeks className='skill1' style={{ color: "green" }} /></a>
              <a href='https://www.hackerrank.com/venkatsp_17'><SiHackerrank className='skill1' style={{ color: "black" }} /></a>
            </div>
            <p>IDE's</p>
            <div className='flex2'>
              <SiAndroidstudio className='skill1' style={{ color: "#3DDC84" }} />
              <SiVisualstudiocode className='skill1' style={{ color: "#0078d7" }} />
              <SiPycharm className='skill1' style={{ color: "black" }} />
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom right cascade>
        <div className={`${view === 0 ? "outer-container ab" : "outer-container"}`}>
          <div className={`${view === 1 ? "container" : "container ab"}`}>
            <div className='small-cont'>
              <SiFirebase className='logo1' id='id1' />
              <p className='p1'>Firebase</p>
            </div>
            <div className='small-cont change'>
              <SiFlask className='logo2' />
              <p className='p1'>Flask</p>
            </div>
            <div className='small-cont'>
              <SiFlutter className='logo3' />
              <p className='p1'>Flutter</p>
            </div>
            <div className='small-cont change1' >
              <SiDjango className='logo4' />
              <p className='p1'>Django</p>
            </div>
            <div className='small-cont'>
              <SiReact className='logo5' />
              <p className='p1'>React</p>
            </div>
            <div className={`small-cont change1`}>
              <SiNodedotjs className='logo6' />
              <p className='p1'>Node js</p>
            </div>
          </div>
        </div>
        </Zoom>
        <div className='pagination1'>
          <input id="switch 1" type="radio" name="dots1" onClick={() => setview(1)} />
          <label htmlFor="switch 1"></label>
          <input id="switch 2" type="radio" name="dots1" onClick={() => setview(0)} />
          <label htmlFor="switch 2"></label>
        </div>
      </div>
    </div>
  )
}


export default Skills