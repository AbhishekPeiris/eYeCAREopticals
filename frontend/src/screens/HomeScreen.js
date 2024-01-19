import React from 'react';
import homeCover from '../images/home_cover.jpg';
import styles from '../styles/Home.css';

const HomeScreen = () => {
    return (
        <div>
          <div className='row'>
            <div className='col'>
                <img src={homeCover} alt="Home cover" className='homepic'/>
                <h1 className='welcome'><strong>We secure your<br />
                eye with qualty<br />
                glasses</strong></h1>
                <p className='welcome_2'>As per your wish, you can buy our quality products<br />
                    at the lowest price. We offer a wide range of products<br />
                    from the most popular brands to the most expensive brands.<br />
                    We also offer a wide range of products from the most<br />
                    popular brands to the most expensive brands.<br /> 
                </p>
                <div className='row' style={{position:"relative", bottom:"530px", marginLeft:"135px"}}>
                    <div className='col'>
                        <button className='btn1'>SHOP NOW !</button>&nbsp;&nbsp;&nbsp;
                        <button className='btn2'>ASK OPTOMETRIST</button>
                    </div>

                </div>
            </div>
          </div>                         
        </div>
    );
}

export default HomeScreen;
