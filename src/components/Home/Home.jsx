import React from 'react';
import styles from './Home.module.css';
import Homesection from '../HomeSection/Homesection';
import WelcomSection from '../WelcomSection/WelcomSection';

export default function Home() {
  return <>
    <Homesection />
    <WelcomSection />
  </>
}
