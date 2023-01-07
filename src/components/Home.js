
import React from 'react';
import '../Styles/Home.css';
import Banner from './Banner';
import Card from './Card';

const Home = () => {

  return (

    <div className='home'>

        <Banner />

        <div className='home__section'>

          <Card
            src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Online Experiences"
            description="Unique Activities We Can Do Together, Led By A World Of Hosts." />

          <Card 
            src="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Unique Stays"
            description="Spaces That Are More Than Just A Place To Sleep"/>

          <Card 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title=" Entire Homes"
            description="Comfortable Private Places With Rooms For Friends And Family"/>

        </div>

        <div className='home__section'>

          <Card 
            src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="3 Bedrooms In Small City"
            description="Superhost With A Stunning View Of The Beachside In Sunny, California"
            price="$130/Night"/>

          <Card
            src="https://images.unsplash.com/photo-1613643043796-a370ee99ecbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            title=" Penthouse In London"
            description="Enjoy The Amazing Sights Of London With This Stunning Penthouse"
            price="$350/Night" />

          <Card 
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="1 Bedroom Apartment"
            description="Superhost With Great Amenities And A Fabolous Shopping Complex Nearby"
            price="$70/Night"/>

        </div>

    </div>

  );

};

export default Home;