import React from 'react';
import '../Styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {

  return (

    <div className='header'>

        <Link to='/'>
          <img 
              className="header__icon" 
              src="/Logo.png" 
              alt="" 
          />
        </Link>
        
        <div className="header__center">

            <input type="text" />

            <SearchIcon />

        </div>

        <div className="header__right">

            <p> Become A Host Today </p> 

            <LanguageIcon />

            <ExpandMoreIcon />

            <Avatar  src='/Profile.png' alt=''/>

        </div>

    </div>

  );

};

export default Header;