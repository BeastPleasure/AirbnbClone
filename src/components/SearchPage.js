import { Button } from '@mui/material';
import React from 'react';
import '../Styles/SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {

  return (

    <div className='searchPage'>
        
        <div className='searchPage__info'>

            <p> 62 Stays ~ 26 August To 30 August ~ 2 Guests </p>

            <h1> Stays Nearby </h1>

            <Button variant='outlined'> Cancellation Flexibility </Button>

            <Button variant='outlined'> Type Of Place </Button>

            <Button variant='outlined'> Price </Button>

            <Button variant='outlined'> Rooms And Beds </Button>

            <Button variant='outlined'> Vacation Spas </Button>

            <Button variant='outlined'> Winter Activities </Button>

            <Button variant='outlined'> Summer Camps </Button>

            <Button variant='outlined'> Spring Sports </Button>

            <Button variant='outlined'> More Filters </Button>

        </div>

        <SearchResult 
          img="https://images.unsplash.com/photo-1569595772723-28b435a286a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          location="The Woods Of Melbourne, Australia"
          title="Entire cabin hosted by Karen"
          description="The property features 2 immaculately designed levels, 2 bedrooms, 
                      2 full bathrooms, a fully equipped kitchen and it overlooks stunning views for miles and miles!"
          star={4.73}
          price="$30/Night"
          total="$117 Total"
        />

        <SearchResult 
          img="https://images.unsplash.com/photo-1586136792369-a0125a326f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          location="The Outskirts Of Fredericksburg, Virginiia"
          title="The Black Log House Of Fabian"
          description="The property features 3 bedrooms, 3 full bathrooms, a fully equipped kitchen,
                       a hot tub, a fire pit, a separated game room, & two outdoor eating areas. "
          star={5}
          price="$50/Night"
          total="$220 Total"
        />

        <SearchResult 
          img="https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          location="The Rivers Of Cambridge, Africa"
          title="Joshua's Palace"
          description="It's a completely private getaway from the hustle and bustle of every day life. Kayak,
                       fish, and crab off the private dock and explore a few acres of woodland forest. "
          star={10}
          price="$75/Night"
          total="$300 Total"
        />

    </div>

  );

};

export default SearchPage;