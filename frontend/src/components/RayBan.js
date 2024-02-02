import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/RayBan.css';
import RaybanEyeGlass from '../images/raybanglass.gif';
import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const RayBan = () => {
    const { brand } = useParams();

    const [rayBan, setRayBan] = useState([]);
    const [duplicateRayBan, setDuplicateRayBan] = useState([]);

    const [searchkey, setSearchkey] = useState('');

    const [type, setType] = useState('all');

    useEffect(() => {
        async function getRayBan() {
            try {
                const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}`);
                setRayBan(response.data.eyeGlass);
                setDuplicateRayBan(response.data.eyeGlass);
            } catch (error) {
                console.log(error);
            }
        }
        getRayBan();
    }, [brand]);

    function filterBySearch() {

        const tempRayBan = duplicateRayBan.filter(rayBan => rayBan.model.toLowerCase().includes(searchkey.toLowerCase()));
        setRayBan(tempRayBan);

    }

    function filterByType(e) {

        setType(e);

        if(e !== 'all') {
            const tempRayBan = duplicateRayBan.filter(rayBan => rayBan.type.toLowerCase() === e.toLowerCase());
            setRayBan(tempRayBan);
        }
        else{
            setRayBan(duplicateRayBan);
        }
    }

    return (
        <div>
            <br /><br /><br />

            <div className='row'>
                <div className='col md-3 RBtable_1col_1'>
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" /><br />
                    <p data-aos="fade-right"><small>Ray-Ban eyeglasses and sunglasses epitomize timeless style and cutting-edge optics.<br /> Renowned for iconic designs like the Aviator and Wayfarer, they seamlessly merge fashion and function.<br /> Crafted with precision, Ray-Ban lenses provide unparalleled clarity and UV protection.<br /> Elevate your look with the brand that has defined cool since 1936.</small></p>
                </div>
                <div className='col md-3'>
                    <img src={RaybanEyeGlass} alt="" className="img-fluid" />
                </div>
            </div>

            <div className='container'>

                <div className='row mt-5 RBtable_3'>

                    <div className='col md-3'>

                        <input class="form-control mr-sm-2 RayBanSearch" type="search" placeholder="Search model No." aria-label="Search"
                            onChange={(e) => {
                                setSearchkey(e.target.value);
                            }}
                            onKeyUp={filterBySearch}
                        />

                    </div>

                    <div className='col md-3'>
                        <select className="RayBanTypeSelect" value={type} onChange={(e) => { filterByType(e.target.value) }}>                      
                            <option value="all">All</option>
                            <option value="prescription eyeglasses">Prescription Eyeglasses</option>
                            <option value="sunglasses">Sunglasses</option>
                        </select>
                    </div>

                    <div className='col md-3'>
                        <h1>col</h1>
                    </div>
                    <div className='col md-3'>
                        <h1>col</h1>
                    </div>

                </div>
            </div>

            <div className="row mb-5 mt-5 RBtable_2">
                {rayBan.map((eyeglass) => (
                    <div className="col-lg-3 RBtable_2col_1" key={eyeglass._id} data-aos="zoom-in">
                        <img src={eyeglass.imageurlcolor1[0]} alt="" width={250} />
                        <p>
                            {eyeglass.brand} | <strong style={{ color: "#0a5a70" }}>{eyeglass.model}</strong><br />
                            <small>{eyeglass.type}</small><br />
                            <Rating
                                count={5}
                                value={eyeglass.rating}
                                size={24}
                                edit={false}
                            />
                            <hr style={{ backgroundColor: "black" }} />
                            Frame : <strong>LKR {eyeglass.price}</strong>
                            <Link to="#!"><button className='Reyeglassesbtn' >SHOP NOW !</button></Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RayBan;
