
import React,{ useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine } from "@tsparticles/react";
import {Row,Col,Button} from 'react-bootstrap'
import { loadSlim } from "@tsparticles/slim"; 
import home2img from '../../../../Public/Image/home2.png'




export default function Banner (){
  const [init, setInit] = useState(false);


 
   
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //         setCurrentDataIndex(prevIndex => (prevIndex + 1) % Data.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  // }, [Data]);
  
  useEffect(() => {


    window.scrollTo(0, 0);
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {

  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1000,
      },    
      background: {
        color: {
          value: "#3B7FBF",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 20,
          },
          repulse: {
            distance: 200,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#3b7fbf",
          distance:150,
          enable: true,
          opacity: 0.9,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value:50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "image", // Changing shape type to image
          stroke: {
            width:20,
            color:"#3b7fbf",
          },
          options: {
            image: {
              src: "Image/Ellipse 2hjgf (1).png", // Add your image path here
              width:100, // Adjust width of the image particle
              height:100, // Adjust height of the image particle
            },
          },
        },
        size: {
          value: {min:25, max:25},
        },
      },
      detectRetina: true,
    }),
    [],
  );
  
  if (init) {
    return (
      <>
      <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
      
      <Row className=' flex justify-content-evenly align-items-center'>      
            <Col md= {5} sm={10} xs={12} xxl={5} lg={5} className='text-light flex flex-col  ps-5'>
                <h1 className='hed1  pt-2'>Revolutionize</h1>
                <h3 className='hed3 text-white'>Your Business with Razobyte's Innovative Tech & Marketing Mastery
                </h3>
                <p className='bannerpara'>Unleash the full potential of your brand with Razobyte's integrated IT solutions and creative digital marketing strategies. Our expertise bridges the latest technology with market-leading insights, ensuring your business stays ahead in a dynamic digital landscape. Partner with Razobyte to navigate the future of digital excellence.</p>
                <div className="d-flex jjustify-content-center align-itmes-center gap-3 mb-3">
                <Button className=" btm" variant='dark'>Get in touch </Button>
                <Button variant='dark' className=" btm ">About Us</Button>
                </div>
            </Col>
            <Col md={5} xs={12} sm={10} xxl={5} className='d-flex justify-content-center align-items-center  pt-2 '>
                <img src={home2img} alt='banner-img' fluid
                    className='rounded-1 banner-images-firstsection img-fluid  ' 
                />
            </Col>
        </Row>  
      </>
    
      
    );
  }
};

