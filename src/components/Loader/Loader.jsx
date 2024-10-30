/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import styles from './Loader.module.css';
function Loader({ onLoadingComplete }){
    const [percentage, setPercentage] = useState(0);
    
    useEffect(() => {

        const interval = setInterval(()=> {
            setPercentage((prevPercentage) => {
                if(prevPercentage < 100) {
                    return prevPercentage +1;
                } else {
                    clearInterval(interval);
                    onLoadingComplete(); // call the callback when loading reaches 100%
                    return 100;
                }
            });
        }, 15);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [onLoadingComplete])

    const handleSkipLoading = () => {
        setPercentage(100);
        onLoadingComplete(); // Call immediately when loading is skipped
    };

    return (
        <div className={styles['loading-container']}
            onClick={handleSkipLoading}
        >
            <span className={styles['loading-text']}>{percentage}%</span>
            <div className={styles['progress-bar']}>
                <div className={styles['progress']} style={ {width: `${percentage}%`}}></div>
            </div>
            <span className={styles['span-text']}>Click anywhere to skip the loading animation!</span>
        </div>
    )
}

Loader.propTypes = {
    onLoadingComplete: PropTypes.func.isRequired
};

export default Loader