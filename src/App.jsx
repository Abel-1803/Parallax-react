import React from 'react'
import Plx from 'react-plx'
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import Bg from './imgs/bg.jpg'
import Logo from './imgs/logo.webp'
import Fire from './imgs/fire.png'
import Image1 from './imgs/im1.jpg'
import Image2 from './imgs/im2.jpeg'
import Image3 from './imgs/im3.jpeg'

function App() {

  return (
   <div>
    <Plx
    const parallaxData = {[
      {
        start: 0,
        end: 900,
        easing:"ease-in",
        properties: [
          {
            startValue: 1,
            endValue: 0.7,
            property: "scale",
          },
        ],
      },
    ]}
    style={{
      position:"fixed",
      left:0,
      top:0,
      width:"100%",
      zIndex:100
    }}
    >
      <img style={{width:"100%",height:"100vh"}} src={Bg} alt="" />

    </Plx>

    <Plx
    const parallaxData = {[
      {
        start: 0,
        end: 800,
        properties: [
          {
            startValue: 1,
            endValue: 1.18,
            property: "scale",
          },
        ],
      },
    ]}
    style={{
      position:"fixed",
      left:0,
      top:0,
      width:"100%",
      zIndex:100
    }}
    >
      <img style={{width:"50%",alignItems:'center',textAlign:"center" }} src={Logo} alt="" />

    </Plx>

    <Plx
    const parallaxData = {[
      {
        start: 0,
        end: 400,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity",
          },
        ],
      },
    ]}
    style={{
      position:"fixed",
      left:0,
      top:0,
      width:"100%",
      zIndex:100
    }}
    >
      <img style={{width:"100%",alignItems:'center',textAlign:"center" }} src={Fire} alt="" />

    </Plx>
    <div
    style={{
      position:"fixed",
      left:0,
      top:0,
      zIndex:200,
      paddingTop:"56%",
      height:"400vh",
      width:"100%"
    }}>
      <div style={{
        background:"#000",
        height:"100%"
      }}></div>

    </div>
    <div
        style={{
          position: "relative",
          zIndex: 300,
          marginTop: "2000px",
          width:"100%"
        }}
      >
        <Carousel
          infiniteLoop={true} 
          interval={3000}      
          showThumbs={false}  
          showStatus={false}  
          useKeyboardArrows={true}
        >
          <div>
            <img src={Image1} alt="Background" />
          </div>
          <div>
            <img src={Image2} alt="Logo" />
          </div>
          <div>
            <img src={Image3} alt="Fire" />
          </div>
        </Carousel>
      </div>
    
    
   </div>
   
  )
}


export default App
