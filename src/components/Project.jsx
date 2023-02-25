import React from 'react'
import '../css/Project.css'
import { ImGithub } from 'react-icons/im'
import { MdSettingsInputAntenna } from 'react-icons/md'

const Project = (props) => {
  return (
    <div className='main3'>
      <p>Works</p>
      <div className='conta'>
        {
          props.project.map((item, index) => {
            return (
              <div className='cell' style={{ backgroundImage: `url(${item.image})` }}>
                <div className='child1'>
                  <p className='title'>{item.title}</p>
                  <p className='des'>{item.description}</p>
                  <div className='flex4'>
                    <p style={{color: "red"}}>Frontend: {item.frontend}</p>
                    <p style={{ color: "orange" }}>Backend: {item.backend}</p>
                    <p style={{ color: "green" }}>Database: {item.database}</p>
                  </div>
                  <div className='flex3'>
                    <a href={item.github} ><ImGithub className='logox' style={{ color: "#ffffff" }} /></a>
                    <a href={item.live} ><MdSettingsInputAntenna className='logox' style={{ color: "green" }} /></a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Project