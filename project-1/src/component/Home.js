import React from 'react'
import Sliderimage from './Sliderimage';
import Welcompage from './Welcompage';
import Service from './Service';
import Cta from './Cta';



function Home() {
  return (
    <div style={{marginLeft:"30px", marginRight:"30px", backgroundColor:"white"}}>
      <Sliderimage />
      <div style={{backgroundColor:"Colors.white70", height:"10px"}}></div>
      <Welcompage />
      <div style={{backgroundColor:"white", height:"20px"}}></div>
      <Service />
      <div style={{backgroundColor:"white", height:"20px"}}></div>
      <Cta />
      <div style={{backgroundColor:"white", height:"20px"}}></div>
      <br></br>
    </div>
  )
}

export default Home
