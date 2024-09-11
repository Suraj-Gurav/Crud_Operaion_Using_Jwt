import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='bgImage'>
      <NavLink className="backBtn" exact to="/">Back</NavLink>
    </div>
  )
}

export default Home;