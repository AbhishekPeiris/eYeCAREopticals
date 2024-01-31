import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const RayBan = () => {

    const { brand } = useParams();
    const [RayBan, setRayBan] = useState();

    useEffect(() => {

        async function getRayBan() {

            try {
                
                const data = (await axios.post(`http://localhost:5000/api/eyeglass/${ brand }`)).data;
                console.log(data.eyeGlass);
                setRayBan(data.eyeGlass);
                
            } catch (error) {

                console.log(error);
                
            }

        }

        getRayBan();
        

    }, []);

    return (
        <div>
            <br /><br /><br />
            <h1>RayBan</h1>
            <h1>{brand}</h1>
        </div>
    );
}

export default RayBan;
