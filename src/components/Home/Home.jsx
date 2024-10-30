/* eslint-disable no-unused-vars */
import { useInView } from 'react-intersection-observer';
import styles from './Home.module.css'
import Typewriter from '../Typewriter/Typewriter'
function Home(){

    const { ref, inView} = useInView({
        triggerOnce: true, // Animation happens only once
        threshold: 0.1, // Trigger when 10% of the component is visible
    })

    return (
        <>
<div className={styles.background}>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
        <div
        className={`${styles['main-container']}`}>
            <span
            ref={ref}
            className={`${styles['intro']} ${inView ? styles['visible-right'] : ''}`}>Hello, I&apos;m Aivaras.</span>
            <span
            ref={ref}
            className={`${styles['intro']} ${inView ? styles['visible-left'] : ''}`}>I&apos;m a Fullstack web developer.</span>
            <a 
            ref={ref}
            className={`${inView ? styles['visible-up'] : ''}`}
            href='#about-section'>Check out my work &#x2193;</a>
        </div>
        </>
    )
}

export default Home