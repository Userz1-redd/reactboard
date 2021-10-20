import React from 'react';
import './Product.css';
const Product = () => {
    return (
        <div className="product">
            <div className="product_info">
                <p>제품1</p>
                <p className="product_price">
                <small>가격</small>
                <strong>10,000</strong>
                <small>원</small>
                </p>
                <div className="product_rating">
                    <p>ㅁ</p>
                    <p>ㅁ</p>
                    <p>ㅁ</p>
                    <p>ㅁ</p>
            
                </div>

            </div>
            <img src="http://placehold.it/" alt=""/>
            <button>장바구니에 담기</button>
        </div>
    );
};

export default Product;