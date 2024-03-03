import React from 'react'
import styels from './Projects.module.css'
import NavbarTop from '../NavbarTop/NavbarTop';
import { Link } from 'react-router-dom';
import Eco from '../../assests/Eco.JPG'
import Catgam from '../../assests/Catga.JPG'
import Age from '../../assests/Age.JPG'
import Proto from '../../assests/Proto.JPG'
import Book from '../../assests/Book.JPG'
import yumm from '../../assests/yumm.JPG'
import Game from '../../assests/Game.JPG'
import New from '../../assests/New.JPG'
import  { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
export default function ProjectsSec() {

  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('#Projects', { x: "-100%"}, {x: 0, duration: 2, ease: "bounce.out"})
    tl.fromTo('#card', { x: "-100%", opacity: 0 }, {x: 0, opacity: 1, duration: 5, ease: "bounce.out"})
  },{scope:container})






  return (
    <>
      <NavbarTop  />
 <section className={styels.ProjectsSection}>
    <div ref={container} className="container">
    <div id='Projects'  className="row">
    <div className="col-md-3 mt-5">
      <div className="card">
        <div className="card-img">
          <img src={Eco}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">E-Commarce</h5>
          <p className="card-text">Validation Forms & All Ecomarce needed</p>
          <Link to="https://husseinmo21.github.io/FinalProject/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div className="card">
        <div className="card-img">
          <img src={Catgam}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">CatGame</h5>
          <p className="card-text">Simple CatGame Website InterActive Design</p>
          <Link to="https://husseinmo21.github.io/CatGameWebsite/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div className="card">
        <div className="card-img">
          <img src={Age}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Digital AGENCY</h5>
          <p className="card-text">Full Responsive Agency Web Design</p>
          <Link to="https://husseinmo21.github.io/Project1/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div id='card' className="card">
        <div className="card-img">
          <img src={Proto}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Personal Portfolio</h5>
          <p className="card-text">Advanced Portfolio InterActive Design</p>
          <Link to="https://husseinmo21.github.io/Portfolio/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div id='card' className="card">
        <div className="card-img">
          <img src={yumm}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Food Review</h5>
          <p className="card-text">Food From all Categories and Areas With Details</p>
          <Link to="https://husseinmo21.github.io/YummyExam/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div id='card' className="card">
        <div className="card-img">
          <img src={Book}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Book Mark</h5>
          <p className="card-text">Simple Design With Animation Intro For BookMark</p>
          <Link to="https://husseinmo21.github.io/BookMark/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div id='card' className="card">
        <div className="card-img">
          <img src={Game}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Game Reviews</h5>
          <p className="card-text">Simple Design For All Games Reviews and Categories</p>
          <Link to="https://husseinmo21.github.io/OOp/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    <div className="col-md-3 mt-5">
      <div id='card' className="card">
        <div className="card-img">
          <img src={New}  width={'100%'} height={200} alt="" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">CA Portfolio Task</h5>
          <p className="card-text">Advanced React Design Task For CodeAlpha</p>
          <Link to="https://husseinmo21.github.io/OOp/" target="_blank" className="btn btn-danger">Let's See</Link>
        </div>

      </div>
    </div>
    </div>
    
    </div>
 </section>
      
    </>
  )
}
