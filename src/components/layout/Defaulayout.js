import React from 'react';
import Footer from '../Footer';
import Navbar from './../Navbar';

function Defaulayout({children}) {
    return (
        <div>
            <Navbar/>
            <div className='margin_center'>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Defaulayout;