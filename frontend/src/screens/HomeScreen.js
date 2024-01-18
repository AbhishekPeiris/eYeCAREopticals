import React from 'react';
import homeCover from '../images/home_cover.jpg';
import styles from '../styles/Home.css';

const HomeScreen = () => {
    return (
        <div>
            <div>
                <img src={homeCover} alt="Home cover" width={1550}/>
                <h1 className={styles.pp}><strong>We secure your<br />eyes with quality<br />glasses</strong></h1>
            </div>
        </div>
    );
}

export default HomeScreen;
