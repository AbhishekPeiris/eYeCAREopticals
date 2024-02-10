import React from 'react'
import eye from '../images/eye.png';
import styles from '../styles/Ophthalmologists.css';
export default function OphthalmologistsScreen() {
    return (

        <div>
            <br /><br /><br />
            <div>
                <img src={eye} alt="eye pic" className='eye pic' />
            </div>
            <div>
                
                    <h1 className='mainfont'>YOU'VE GOT OPTIONS</h1> <br />
                    <p className='eyefont'>No glasses. No contacts.<br />
                    The safe and easy way...<br />
                  
                </p>
            </div>
        </div>
    )
}
