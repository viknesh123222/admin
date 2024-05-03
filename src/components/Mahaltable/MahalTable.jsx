import React, { useState, useEffect } from 'react';
import BookingCalendar from 'react-calendar';
import axios from 'axios';
import './mahal.css';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

function Form() {
  const [blockedDates, setBlockedDates] = useState([]);

  useEffect(() => {
    axios.get('https://api-3-feun.onrender.com/api/getmahal')
      .then(response => {
        console.log(response.data)
        const dates = response.data.map(reservation => ({
          from: new Date(reservation.sdate),
          to: new Date(reservation.edate),
        }));
        setBlockedDates(dates);
      })
      .catch(error => {
        console.error('Error fetching travel data:', error);
      });
  }, []);

  const isBlocked = date =>
    blockedDates.some(d => date <= d.from && date >= d.to);
  console.log(blockedDates);
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isBlocked(date)) {
        console.log(date+"blocked");
        return 'blocked';
      
      } 
    }
  };

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className='Form'>
      <BookingCalendar
      tileClassName={tileClassName}
    />
    </div>
    </div>
 </div>
    
  );
}

export default Form;
