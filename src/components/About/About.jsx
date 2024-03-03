import React from 'react';
import styles from './About.module.css';
import NavbarTop from '../NavbarTop/NavbarTop';
import htmllogo from '../../assests/Html3d.webp'
import csslogo from '../../assests/Css.png'
import jslogo from '../../assests/JavaSc.webp'
import bootlogo from '../../assests/bootlog.webp'
import tailwlogo from '../../assests/Tailwind.png'
import reactlogo from '../../assests/React.jpeg'
import nextlogo from '../../assests/Nextlog.png'
import gsaplogo from '../../assests/gsaplog.svg'
import framerlogo from '../../assests/framer.png'
import reduxlogo from '../../assests/redlog.webp'
import { Link } from 'react-router-dom'
import  { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

export default function About() {


  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('#name', { x: "-100%", opacity: 0 }, {x: 0, opacity: 1, duration: 2, ease: "power3.out"})
    tl.fromTo('#skill', { y: "-100%", opacity: 0 }, {y: 0, opacity: 1, duration: 1.5, ease: "bounce.out"})
    

  },{scope:container})

  return <>
  <NavbarTop  />
  <section className={styles.about}>
    <div ref={container} className="container">
    <h2 className='h1 text-white mx-2 py-3'>About Me <i className="fa-solid fa-arrow-down"></i></h2>
    <div className="row">
      <div className="col-md-12">
      <p id='name' className='w-50 text-white px-2'>I'm a FrontEnd web developer with over a 2 years of experience in designing and developing web Applications My Journey Began When i was in College i start to study alone on internet as a Ui Developer Then i enchaned my Skills In Route iT To Become a Strong FrontEnd Developer </p>
      </div>
    </div>
    <div id='skill' className="row ">
      <div className="col-md-12">
       <div className="row gx-5 gy-3">
        <div className="col-md-2">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={htmllogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>HTML 5</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={csslogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>Css</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={bootlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>BootStrap</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={jslogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>JavaScript</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={tailwlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>TailwindCss</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={reactlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>React-Js</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={nextlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>Next-Js</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={reduxlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>Redux</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2 mx-3">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={framerlogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>FramerMotion</p>
          </div>
        
          </div>
        </div>
        <div className="col-md-2">
        <div className={styles.MyCard}>
        <div className={styles.card_Image}>
            <img src={gsaplogo} alt="" />
          </div>
          <div className={styles.layer}>
            <p>GSAP</p>
          </div>
        
          </div>
        </div>
       </div>
      </div>
    </div>
    </div>
    
    <div className={styles.arrow}>
 <Link to={'/'} className='text-decoration-none'><i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>Home</span><br /></Link> 
 <Link to={'/projects'} className='text-decoration-none'><i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>Projects</span> <br /></Link> 
 <Link to={'/cv'} className='text-decoration-none'> <i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>C.V</span></Link>
  
      </div>
  </section>
  </>
}
