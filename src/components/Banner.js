import { Button } from '@mui/material';
import React, { useState } from 'react';
import '../Styles/Banner.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

  return (

    <div className='banner'>

        <div className='banner__search'> 

            {showSearch && <Search />}

            <Button
                className='banner__searchButton'
                variant='outlined'
                onClick={() => setShowSearch(!showSearch)}
            >
                
                {showSearch ? "Hide" : "Search Dates"}

            </Button>        
        
        </div>

        <div className='banner__info'>

            <h1 className='big__header'> Get Out And Stretch Your Imagination </h1>

            <h5> 
                Plan A Different Kind Of Getaway To Uncover The Hidden Gems Near You
            </h5>

            <Button variant='outlined' onClick={() => navigate('/search')}> Explore Nearby </Button>

        </div>


    </div>

  );
  
};

export default Banner;