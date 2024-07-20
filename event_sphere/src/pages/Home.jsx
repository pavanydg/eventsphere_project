import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

export const Home = () => {
  const[events,setEvents] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/get_events");
        setEvents(res.data.results);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };  
    fetchData();
  
  }, []);

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <p>Events</p>
        {events.map((eve) => {
          return <div>
            {eve.title}
          </div>
        })}
      </div>
    </div>
  )
}
