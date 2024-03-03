import React from 'react'
import styles from './Cv.module.css';
import fsection from '../../assests/ds.JPG';
import MYCV from '../../assests/Mycv.pdf';
import { Link } from 'react-router-dom';
import  { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

export default function Cv() {

  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('#cv', { y: "-100%", opacity: 0 }, {y: 0, opacity: 1, duration: 4, ease: "power3.out"})
    

  },{scope:container})

  return (
    <>
    <div ref={container} className="div">
    <section id='cv' className={styles.cv}>
     <div className="position-absolute mt-5 mx-5">
     <Link to={MYCV} download="MYCV" target='_blank'>
   <button className='btn btn-info mx-2'>Download C.V</button></Link>
      <Link to="/" className="btn btn-danger">Back Home</Link>
     </div>
     <img src={fsection} className='w-100' height={300} alt="" />
      <div  className="container">
      
      <div className="info d-flex justify-content-between">
      <p>ADDRESS </p>
      <p>Alexandria,Egypt</p>
      <p>PHONE </p>
      <p>01093378628 </p>
      </div>
      <div className="info d-flex justify-content-between">
      <p className='mx-2'>EMAIL </p>
      <p className='mx-5 px-5'>s7so1234@gmail.com</p>
      <p>LINKS </p>
     <p><Link to={"https://github.com/HusseinMo21"} target="_blank" className='mx-1'>GitHub</Link>
     <Link to={"https://www.linkedin.com/in/hussein-mohamed-078476290/"} target="_blank" className='mx-1'>LinkdIn</Link>
     <Link to={"https://www.facebook.com/S7s.fit.37"} target="_blank" className='mx-1'>FaceBook</Link></p>
      </div>
      </div>
    <div className="container">
    <div className="profile d-flex justify-content-between mt-4">
      <h3 className='mt-3'>01 PROFILE </h3>
      <p className='w-75 ms-5 ps-5 text-muted'>Front-End Web Developer, aim to be a professional Software Engineer & To gain More 
experience And knowledge With Team Work . Knowledgeable in user interface, testing, and <br />
debugging processes.</p>
      </div>

      <div className="profile mt-5">
      <h4 className='w-50 mt-5'>02 EMPLOYMENT HISTORY </h4>
      <div className="profile d-flex">
      <p className='w-50'>Feb 2017—Apr2020</p>
      <div className="both d-flex flex-column">
      <h3 className='w-75 me-5 pe-5'>Ui Developer</h3>
      <ul>
        <li className='text-muted'>• Developed user interfaces that were cross-browser and device compatible, ensuring a 
consistent user experience across platforms</li></ul>
      </div>   
      </div>  
      </div>

      <div className="position-relative mt-4">
      <h4 className='w-50 mt-3'> 03 EDUCATION </h4>
      <div className="profile d-flex">
      <p className='w-50 mt-3'>Feb 2017—Apr2020  <p className='text-muted'>Alexandria</p></p>
     
      <div className="both d-flex flex-column">
      <h3 className='w-100 me-5 pe-5'>Faculty of law<p className='text-muted fs-5'>Bachelor's</p></h3>

      </div>   
      </div>  
      <div className="profile d-flex">
      <p className='w-50 mt-3'>Aug 2023 — Oct 2024 <p className='text-muted'>Alexandria</p></p>
     
      <div className="both d-flex flex-column">
      <h3 className='w-100 me-5 pe-5'>RouteIt<p className='text-muted fs-5'>FullStackDeveloper
 Diploma</p></h3>

      </div>   
      </div>  
      </div>



      <div className="info d-flex justify-content-between">
      <h3>05 LANGUAGES</h3>
      <p>English</p>
      <p><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i><i class="fa-regular fa-circle"></i></p>
      <p>Arabic </p>
      <p><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i></p>
      </div>



    </div>
   
   
  
     </section>
    </div>
   
    </>
  )
}
