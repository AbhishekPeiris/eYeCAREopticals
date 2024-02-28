import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RayBanModel = () => {

    const [eyeglass, setEyeglass] = useState();

    const { brand, model } = useParams();

    useEffect(() => {

        async function getEyeglassDetails(brand, model) {

            const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}/${model}`);
            console.log(response.data.eyeGlass);

        }
        getEyeglassDetails(brand, model);

    },[brand, model])
    return (
        <div>
            <br /><br /><br />
            {/* <Carousel prevLabel='' nextLabel=''>
                {room.imageurls.map(url => {
                    return <Carousel.Item>
                        <img className='d-block w-100 bigimg' src={url} alt='Sepectacles Slied' />
                    </Carousel.Item>
                })}
            </Carousel> */}
        </div>
    );
}

export default RayBanModel;
