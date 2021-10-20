
import './Header.css';
import {useState, useEffect} from 'react'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src=""/>
        <div className = "header_search">
          <input className="header_searchInput" type = "text" placehloder="임시"/>
          <SearchIcon className="header_searchIcon"/>
       </div>
        <div className="header_nav">
          
          <div className = "header_option">
            <span className = "header_optionLineOne">안녕하세요</span>
            <span className = "header_optionLineTwo">로그인</span>
          </div>
          <div className = "header_option">
            <span className = "header_optionLineOne">돌아가기</span>
            <span className = "header_optionLineTwo">주문내역</span>
            
          </div>
          <div className = "header_option">
            <span className = "header_optionLineOne">반가워요</span>
            <span className = "header_optionLineTwo">테스트</span>
          </div>
          <div className = "header_optionBasket">
            <ShoppingBasket/>
            <span className = "header_optionLineTwoheader_basketCount">장바구니</span>
          </div>
        </div>
     
    </div>
  );
}

export default Header;
