import React from 'react';
import './Home.css';
import Product from './Product';
const Home = () => {
    return (
        <div className="home">
           <div className="home_container">
               <img className="home_image" src=""
               alt="" />
                <div className="home_row">
                    <Product id="2323" title="제품1입니다"
                    price={3000} image="" rating={5}></Product>

                </div>
                <div className="home_row">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>

                </div>
                <div className="home_row">
                    <Product></Product>

                </div>
           </div>
        </div>
    );
};

export default Home;