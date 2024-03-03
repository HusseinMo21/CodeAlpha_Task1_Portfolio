import React from 'react'
import styles from './WelcomSection.module.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom'
export default function WelcomSection() {
  return (
    <div className={styles.bg}>
    <section className={styles.sectionHello} id="intro">
  <div className="container">
    <h2>HELLO &amp; WELCOME</h2>
    <p className="section-subtitle"><span>EXPLORE MY WORK</span></p>
    <div className="row">
      <div className="col-sm-4">
        <div className={`${styles.main_service} text-right`}>
          <div className={styles.rectangle}>
            <i className="fa fa-calendar" aria-hidden="true" />
          </div>
          <h3>Meet Deadlines</h3>
          <p>Your deadline is the most important value for me. My job is to make sure the job is done perfectly before the deadline.</p>
        </div>
        <div className={`${styles.main_service} text-right`}>
          <div className={styles.rectangle}>
            <i className="fa fa-comments" aria-hidden="true" />
          </div>
          <h3>Communication Is Key</h3>
          <p>im always available to check on your questions and take in feedback as soon as possibly.</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className={styles.big_rectangle}>
          <img src={logo} className='img-fluid' alt='' />
        </div>
      </div>
      <div className="col-sm-4">
        <div className={`${styles.main_service} text-left`}>
          <div className={styles.rectangle}>
            <i className="fa fa-check" aria-hidden="true" />
          </div>
          <h3>Quality Control</h3>
          <p>i test out everything to make sure that your project is fully functional, cross–browser compatible and meets your specifications.</p>
        </div>
        <div className={`${styles.main_service} text-left`}>
          <div className={styles.rectangle}>
            <i className="fa fa-list" aria-hidden="true" />
          </div>
          <h3>Pixel Perfect</h3>
          <p>i develop meaningful digital products and experiences that matter with design thinking and creative craftsmanship.</p>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.arrow}>
 <Link to={'/about'} className='text-decoration-none'><i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>About</span><br /></Link> 
 <Link to={'/projects'} className='text-decoration-none'><i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>Projects</span> <br /></Link> 
 <Link to={'/cv'} className='text-decoration-none'> <i className={`fa-solid fa-arrow-right mx-2 ${styles.arrowRight}`}></i><span>C.V</span></Link>
  
      </div>
</section>
</div>
  )
}
