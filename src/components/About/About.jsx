
 
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css'
function About(){

    const { ref: titleRef, inView: titleInView} = useInView({
        triggerOnce: true, // Animation happens only once
        threshold: 0.2, // Trigger when 20% of the component is visible
    })

    const { ref: infoRef1, inView: infoInView1 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const { ref: infoRef2, inView: infoInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });


    return (
        <>
        <div id='about-section' className={`${styles['info-container']}`}>
            <span
                ref={titleRef}
                className={`${titleInView ? styles['visible-up'] : styles['invisible']}`}
            >
            About
            </span>
            <div className={styles['info-wrap']}>
                <div 
                    ref={infoRef1}
                    className={`${styles['info-about-me']} ${infoInView1 ? styles['visible-left'] : styles['invisible']}`}
                >
                    <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303861/avatar_lnujj9.png" alt="user" />
                    <p>I&apos;m a fullstack developer from Lithuania with a deep passion 
                        for JavaScript, React and other tools. I like to build dynamic, user-friendly, robust web applications. 
                        I&apos;m committed to continous learning and staying updated with the latest industry trends to ensure that I bring 
                        the best practices to every project.
                    </p>
                </div>
                <div
                ref={infoRef2}
                className={`${styles['languages-and-tools']} ${infoInView2 ? styles['visible-right'] : styles['invisible']}`}>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303817/javascript-color_zoyryq.svg" alt="JavaScript logo" />
                        JAVASCRIPT
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303844/typescript-color_hcq7zq.svg" alt="TypeScript logo" />
                        TYPESCRIPT
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303813/html5-color_zwpmtz.svg" alt="HTML5 logo" />
                        HTML5
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303766/css3-color_qphk1n.svg" alt="CSS3 logo" />
                        CSS3
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303839/sass-color_rkeh5v.svg" alt="SASS logo" />
                        SASS
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303826/nodedotjs-color_hzjgl2.svg" alt="Node.js logo" />
                        NODE.JS
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303787/git-color_xg4ixz.svg" alt="Git logo" />
                        GIT
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303836/react-color_axgre9.svg" alt="React logo" />
                        REACT
                    </span>
                     <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303803/express_v3ydco.svg" alt="Express logo" />
                        EXPRESS.JS
                    </span>
                    <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303842/tailwindcss-color_ff81kj.svg" alt="Tailwind logo" />
                        TAILWIND
                    </span>
                     <span>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303830/postgresql-color_k5yjbq.svg" alt="React logo" />
                        POSTGRESQL
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
export default About