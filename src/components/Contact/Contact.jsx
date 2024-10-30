/* eslint-disable no-unused-vars */
import styles from './Contact.module.css'
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
function Contact(){

    const { ref, inView} = useInView({
        triggerOnce: true, // Animation happens only once
        threshold: 0.8, // Trigger when 20% of the component is visible
    })

    const [logoUrl, setLogoUrl] = useState({
        // email: {
        //     default: '',
        //     hover: ''
        // },
        github: {
            default: 'https://res.cloudinary.com/durh877rl/image/upload/v1730303808/github_vyymza.svg',
            hover: 'https://res.cloudinary.com/durh877rl/image/upload/v1730303810/github2_qvqkgs.svg'
        },
        linkedin: {
            default: 'https://res.cloudinary.com/durh877rl/image/upload/v1730303818/linkedin_ic4yyx.svg',
            hover: 'https://res.cloudinary.com/durh877rl/image/upload/v1730303820/linkedin2_h8mxly.svg'
        }
    });

    // State to track which icon is currently being hovered
    const [currentHover, setCurrentHover] = useState({
        email: false,
        github: false,
        linkedin: false
    });

    // event to change the icon
    const handleMouseEnter = (key) => {
        setCurrentHover((previous)=> ({
            ...previous,
            [key]: true
        }));
    };
    // event to reset the icon to default
    const handleMouseLeave = (key) => {
        setCurrentHover((previous)=> ({
            ...previous,
            [key]: false
        }));
    };


    return (
        <div 
        ref={ref}
        id='contact' className={`${styles['contact-container']} ${inView ? styles['visible-up'] : styles['invisible']}`}>
            <span>Contact</span>
            <div className={styles['contact-link-list']}>
                {/* <a href="mailto:"
                    onMouseEnter={() => handleMouseEnter('email')}
                    onMouseLeave={() => handleMouseLeave('email')}>
                 <img
                    src={logoUrl.email.default}
                    alt="Email Icon"
                    style={{ opacity: currentHover.email ? 0 : 1 }}
                    />
                 <img
                    src={logoUrl.email.hover}
                    alt="Email Hover Icon"
                    style={{ opacity: currentHover.email ? 1 : 0 }}
                    />
                Email
                </a> */}
                <a href="https://github.com/aivaras23" target='_blank'
                    onMouseEnter={() => handleMouseEnter('github')}
                    onMouseLeave={() => handleMouseLeave('github')}>
                <img
                    src={logoUrl.github.default}
                    alt="GitHub Icon"
                    style={{ opacity: currentHover.github ? 0 : 1 }}
                />
                <img
                    src={logoUrl.github.hover}
                    alt="GitHub Hover Icon"
                    style={{ opacity: currentHover.github ? 1 : 0 }}
                />
                GitHub
                </a>
                <a href="https://www.linkedin.com/in/aivaras-palubinskas-05a3a62b0/" target='_blank'
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={() => handleMouseLeave('linkedin')}>
                <img
                    src={logoUrl.linkedin.default}
                    alt="LinkedIn Icon"
                    style={{ opacity: currentHover.linkedin ? 0 : 1 }}
                />
                <img
                    src={logoUrl.linkedin.hover}
                    alt="LinkedIn Hover Icon"
                    style={{ opacity: currentHover.linkedin ? 1 : 0 }}
                />
                LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Contact