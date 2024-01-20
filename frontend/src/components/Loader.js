import React, { useState } from 'react';
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {

    const [loading, setLoading] = useState(true);

    return (
        <div style={{marginTop:'150px'}}>
           <center><div className="sweet-loading">

                <PulseLoader
                    color='#ff4500'
                    loading={loading}
                    cssOverride=''
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div></center>
        </div>
    );
}

export default Loader;
