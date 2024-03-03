import React, { useRef } from 'react'
import styles from './Homesection.module.css'
import bgvideo from '../../assests/bg.mp4'
import Navbar from '../Navbar/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

export default function Homesection() {

  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('#name', { x: "-100%", opacity: 0 }, {x: 0, opacity: 1, duration: 2, ease: "power3.out"})
    tl.fromTo('#job', { x: "-100%", opacity: 0 }, {x: 0, opacity: 1, duration: 1.5, ease: "power3.out"})
    tl.fromTo('#job2', { x: "-100%", opacity: 0 }, {x: 0, opacity: 1, duration: 1.2, ease: "power3.out"})

  },{scope:container})

  

  return (<>
   <section className={styles.hero}>
    <video src={bgvideo} autoPlay loop muted></video>
    <div ref={container}  className="position-absolute text-white text-center">
        <h1 id='name' className='mb-4'>I AM Hussein Mohamed</h1>
        <p id='job' className={styles.underlineP}>I'M A CREATIVE WEB DEVELOPER</p>
        <p id='job2'>I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERACTION TOGETHER</p>
    </div>

   <div onClick={() => window.scrollTo(0, 1000, { behavior: 'contsmooth' })} className={styles.arrow}>
   <i class="fa-solid fa-chevron-down"></i>
   </div>
  </section>
  <Navbar />
  </>
 
  )
}
