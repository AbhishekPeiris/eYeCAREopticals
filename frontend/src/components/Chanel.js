import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/RayBan.css';
import ChanelEyeGlass from '../images/chanelglass.gif';
import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 1000 });

const Chanel = () => {
    const { brand } = useParams();

    const [chanel, setChanel] = useState([]);
    const [duplicateChanel, setDuplicateChanel] = useState([]);

    const [searchkey, setSearchkey] = useState('');
    const [type, setType] = useState('all');
    const [gender, setGender] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');

    const [hasResults, setHasResults] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getChanel() {

            try {
                setTimeout(async () => {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}`);
                    setChanel(response.data.eyeGlass);
                    setDuplicateChanel(response.data.eyeGlass);
                    setLoading(false);
                }, 700);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getChanel();
    }, [brand]);

    function filterBySearch() {
        const tempChanel = duplicateChanel.filter((chanel) => chanel.model.toLowerCase().includes(searchkey.toLowerCase()));
        setHasResults(tempChanel.length > 0);
        setChanel(tempChanel);
    }

    function filterByType(e) {
        setType(e);
        const filteredChanel = applyFilters(e, gender, selectedPriceRange);
        setHasResults(filteredChanel.length > 0);
        setChanel(filteredChanel);
    }

    function filterByGender(e) {
        setGender(e);
        const filteredChanel = applyFilters(type, e, selectedPriceRange);
        setHasResults(filteredChanel.length > 0);
        setChanel(filteredChanel);
    }

    function filterByPrice(e) {
        setSelectedPriceRange(e);
        const filteredChanel = applyFilters(type, gender, e);
        setHasResults(filteredChanel.length > 0);
        setChanel(filteredChanel);
    }

    function applyFilters(selectedType, selectedGender, selectedPrice) {
        return duplicateChanel.filter((chanel) => {
            const typeCondition = selectedType === 'all' || chanel.type.toLowerCase() === selectedType.toLowerCase();
            const genderCondition = selectedGender === 'all' || chanel.gender.toLowerCase() === selectedGender.toLowerCase();
            const priceCondition = selectedPrice === 'all' || (chanel.price <= parseInt(selectedPrice) && chanel.price >= parseInt(selectedPrice) - 9999);
            return typeCondition && genderCondition && priceCondition;
        });
    }

    return (

        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>

                    <br /><br /><br />

                    <div className='row'>
                        <div className='col md-3 RBtable_1col_1'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/2560px-Chanel_logo_interlocking_cs.svg.png" alt="" width="170" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" /><br /><br/>
                            <p data-aos="fade-right"><small>CHANEL eyeglasses and sunglasses epitomize timeless elegance and<br/> sophistication. With iconic designs and meticulous attention<br/> to detail, each pair embodies the spirit of luxury<br/> and refinement. From classic shapes to bold statements,<br/> CHANEL eyewear exudes effortless style and glamour,<br/> perfect for those who appreciate the fusion of fashion and artistry.</small></p>
                        </div>
                        <div className='col md-3'>
                            <img src={ChanelEyeGlass} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className='container'>

                        <div className='row mt-5 RBtable_3'>

                            <div className='col md-3 RBtable_3col_1'>
                                <small className='barname2'>Search here</small>
                                <input class="form-control mr-sm-2 RayBanSearch" type="search" placeholder="Search model No." aria-label="Search"
                                    onChange={(e) => {
                                        setSearchkey(e.target.value);
                                    }}
                                    onKeyUp={filterBySearch}
                                />
                            </div>

                            <div className='col md-3 RBtable_3col_1'>
                                <small className='barname'>Select Type</small>
                                <select className="RayBanTypeSelect" value={type} onChange={(e) => { filterByType(e.target.value) }}>
                                    <option value="all">All</option>
                                    <option value="prescription eyeglasses">Prescription Eyeglasses</option>
                                    <option value="sunglasses">Sunglasses</option>
                                </select>
                            </div>

                            <div className='col md-3 RBtable_3col_1'>
                                <small className='barname'>Select Gender</small>
                                <select className="RayBanTypeSelect" value={gender} onChange={(e) => { filterByGender(e.target.value) }}>
                                    <option value="all">All</option>
                                    <option value="unisex">Unisex</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>

                            <div className='col md-3 RBtable_3col_1'>
                                <small className='barname'>Select Price</small>
                                <select className="RayBanTypeSelect" value={selectedPriceRange} onChange={(e) => { filterByPrice(e.target.value) }}>
                                    <option value="all">All</option>
                                    <option value="9999">LKR 0 - LKR 9 999</option>
                                    <option value="19999">LKR 10 000 - LKR 19 999</option>
                                    <option value="29999">LKR 20 000 - LKR 29 999</option>
                                    <option value="39999">LKR 30 000 - LKR 39 999</option>
                                    <option value="49999">LKR 40 000 - LKR 49 999</option>
                                    <option value="59999">LKR 50 000 - LKR 59 999</option>
                                    <option value="69999">LKR 60 000 - LKR 69 999</option>
                                    <option value="79999">LKR 70 000 - LKR 79 999</option>
                                    <option value="89999">LKR 80 000 - LKR 89 999</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {hasResults ? (
                        <div className="row mb-5 mt-5 RBtable_2">
                            {chanel.map((eyeglass) => (
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
                                        <Link to={`/Ray-Ban/${eyeglass.model}`}><button className='Reyeglassesbtn' >SHOP NOW !</button></Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-5">
                            <img src="https://cdn.dribbble.com/users/1982249/screenshots/13673321/media/245af641dcd3f72ec8301750900169b9.png?resize=400x300&vertical=center" alt="" />
                        </div>
                    )}

                </div>
            )}
        </div>

    );
}

export default Chanel;
