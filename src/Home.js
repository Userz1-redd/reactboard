import React from 'react';
import './Home.css';
import Product from './Product';
const Home = () => {
    return (
        <div classname="home">
           <div classname="home_container">
               <img classname="home_image" src=""
               alt="" />
                <div classname="home_row">
                    <Product></Product>

                </div>
                <div classname="home_row">
                    <Product></Product>
                    <Product></Product>

                </div>
                <div classname="home_row">
                    <Product></Product>

                </div>
           </div>
        </div>
    );
};

export default Home;