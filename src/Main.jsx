import React from 'react'
import Home from './components/Home'
import Project from './components/Project'
import Skills from './components/Skills'
import Image from "./assets/2.png"
import Image1 from "./assets/3.png"
import Image3 from "./assets/6.png"
import About from './components/About'

const Projects = [
  {
    "title" : "Sales Man App",
    "description": "The app is an intermediate between Salesperson and the company to simplify operations on orders, sales, collections and expenses.",
    "image": Image,
    "frontend": "Flutter",
    "backend": "Django",
    "database": "Firebase",
    "github":"https://github.com/venkatsp17/salesapp",
    "live":""
  },
  {
    "title": "Restaurant App",
    "description": "This is a simple restaurant app built on flutter to manage crowd and orders in college cafes.",
    "image": Image1,
    "frontend": "Flutter",
    "backend": "Django",
    "database": "Firebase",
    "img":"./assets/2.png",
    "github": "https://github.com/venkatsp17/Restaurant",
    "live": ""
  },
  {
    "title": "Special Lab Change Portal",
    "description": "This is a portal build for our college students to change from one lab to other.",
    "image": Image3,
    "frontend": "Flutter",
    "backend": "Node JS",
    "database": "My SQL",
    "img": "./assets/2.png",
    "github": "https://github.com/Keerthi-Vibisan-S/BIT-Hack.git",
    "live": ""
  }
]




const Main = () => {
  return (
    <div>
        <Home/>
        <Skills/>
        <Project project = {Projects}/>
        <About/>
    </div>
  )
}

export default Main