 import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css'
function Projects(){
    const { ref: titleRef, inView: titleInView} = useInView({
        triggerOnce: true, // Animation happens only once
        threshold: 0.8, // Trigger when 80% of the component is visible
    })

    // Separate hooks for each project card
    const { ref: projectRef1, inView: projectInView1 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const { ref: projectRef2, inView: projectInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const { ref: projectRef3, inView: projectInView3 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const { ref: projectRef4, inView: projectInView4 } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });



    return(
        <div id='projects' className={styles['projects-container']}>
            <span
                ref={titleRef}
                className={`${titleInView ? styles['visible-up'] : styles['invisible']}`}
            >
                Projects
            </span>
            <div className={styles['projects-showcase']}>
                <div 
                ref={projectRef1}
                className={`${styles['project-card']} ${styles['project-card-left']} ${projectInView1 ? styles['visible-left'] : styles['invisible']}`}>
                    <div className={styles['project-card-image']}>
                        <img src="https://res.cloudinary.com/durh877rl/image/upload/v1730303865/projectshowcase_yliynd.png" alt="project image one" />
                    </div>
                    <div className={styles['project-info']}>
                        <h2>Full-Stack Movie Application</h2>
                        <p>This is a full-stack movie application designed to provide a seamless movie exploration experience, complete with user authentication, movie search, and social interaction features. Users can explore a wide range of movies, search by title, sort by year, title, or IMDb rating, rate, and favorite movies, and interact with each other through comments, upvotes, and downvotes.</p>
                        <p>Tech Stack:</p>
                        <li>Frontend: React, TypeScript, Tailwind</li>
                        <li>Backend: Node.js, Express</li>
                        <li>Database: PostgreSQL</li>
                        <li>API: OMDB API</li>
                        <div className={styles['project-info-links']}>
                            <a href="https://github.com/aivaras23/movie-application" target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>
                {/* 
                <div 
                ref={projectRef2}
                className={`${styles['project-card']} ${styles['project-card-right']} ${projectInView2 ? styles['visible-right'] : styles['invisible']}`}>
                    <div className={styles['project-card-image']}>
                        <img src="https://via.placeholder.com/800x500" alt="project image one" />
                    </div>
                    <div className={styles['project-info']}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque aperiam, officiis quae non fugit aliquid reiciendis enim voluptatibus nihil, dolores dolorum odit neque dignissimos. Aut minima provident consequuntur voluptates.</p>
                        <div className={styles['project-info-links']}>
                            <a href="#">View Live</a>
                            <a href="#">View Code</a>
                        </div>
                    </div>
                </div>
                <div 
                ref={projectRef3}
                className={`${styles['project-card']} ${styles['project-card-left']} ${projectInView3 ? styles['visible-left'] : styles['invisible']}`}>
                    <div className={styles['project-card-image']}>
                        <img src="https://via.placeholder.com/800x500" alt="project image one" />
                    </div>
                    <div className={styles['project-info']}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque aperiam, officiis quae non fugit aliquid reiciendis enim voluptatibus nihil, dolores dolorum odit neque dignissimos. Aut minima provident consequuntur voluptates.</p>
                        <div className={styles['project-info-links']}>
                            <a href="#">View Live</a>
                            <a href="#">View Code</a>
                        </div>
                    </div>
                </div>
                <div 
                ref={projectRef4}
                className={`${styles['project-card']} ${styles['project-card-right']} ${projectInView4 ? styles['visible-right'] : styles['invisible']}`}>
                    <div className={styles['project-card-image']}>
                        <img src="https://via.placeholder.com/800x500" alt="project image one" />
                    </div>
                    <div className={styles['project-info']}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque aperiam, officiis quae non fugit aliquid reiciendis enim voluptatibus nihil, dolores dolorum odit neque dignissimos. Aut minima provident consequuntur voluptates.</p>
                        <div className={styles['project-info-links']}>
                            <a href="#">View Live</a>
                            <a href="#">View Code</a>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </div>
    )
}

export default Projects