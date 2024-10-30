import styles from './Header.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navbarContentRef = useRef(null);

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    }

    useEffect(() => {
        const navbarContent = navbarContentRef.current;
        
        if (isNavOpen) {
            navbarContent.style.height = `${navbarContent.scrollHeight}px`;

            // Wait until the transition completes, then set height to auto
            const transitionEnd = () => {
                navbarContent.style.height = 'auto';
                navbarContent.removeEventListener('transitionend', transitionEnd);
            };

            navbarContent.addEventListener('transitionend', transitionEnd);
        } else {
            // Set height back to the scrollHeight before closing to trigger the transition
            navbarContent.style.height = `${navbarContent.scrollHeight}px`;

            // Force reflow to ensure the transition works
            navbarContent.getBoundingClientRect();

            // Set height to 0 to trigger the closing animation
            navbarContent.style.height = '0';
        }
    }, [isNavOpen]);

    return (
        <header className={styles.header}>
            <div className={styles['header-content']}>
                <span>&lt;Aivaras/&gt;</span>
                <div className={styles['menu-icon']} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
                <nav className={styles.navbar}>
                    <ul ref={navbarContentRef} className={`${styles['navbar-content']} ${isNavOpen ? styles['active'] : ''}`}>
                        <li><a href="#">&lt;<span className={styles.highlight}>H</span>ome/&gt;</a></li>
                        <li><a href="#about-section">&lt;<span className={styles.highlight} >A</span>bout/&gt;</a></li>
                        <li><a href="#projects">&lt;<span className={styles.highlight} >P</span>rojects/&gt;</a></li>
                        <li><a href="#contact">&lt;<span className={styles.highlight} >C</span>ontact<span className={styles.highlight} >M</span>e/&gt;</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header