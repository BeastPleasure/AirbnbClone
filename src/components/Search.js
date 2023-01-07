import React, { useState } from 'react';
import '../Styles/Search.css';

import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';

const Search = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

  }

  return (

    <div className='search'>

      <Calendar className='calendar__object' ranges={[selectionRange]} onChange={handleSelect} />

      <h2> Number Of Guests: <PeopleIcon /> </h2>

      <input min={0} defaultValue={2} type="number" />
      
      <Button> Search Airbnb </Button>

    </div>

  );

};

export default Search;