import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className='Nav-bar'>
        <div className='Nav-container'>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <h2 className='home-text'>Home</h2>
          </NavLink>
          {location.pathname === '/' ? (
            <form>
              <select className='section-select' onChange={e => props.submitSection(e.target.value)}>
                <option value='' disabled selected>Filter by Category:</option>
                <option value='home'>Main</option>
                <option value='arts'>Arts</option>
                <option value='automobiles'>Automobiles</option>
                <option value='books'>Books</option>
                <option value='business'>Business</option>
                <option value='fashion'>Fashion</option>
                <option value='food'>Food</option>
                <option value='health'>Health</option>
                <option value='insider'>Insider</option>
                <option value='magazine'>Magazine</option>
                <option value='nyregion'>NY Region</option>
                <option value='obituaries'>Obituaries</option>
                <option value='opinion'>Opinion</option>
                <option value='politics'>Politics</option>
                <option value='realestate'>Real Estate</option>
                <option value='Science'>Science</option>
                <option value='Sports'>Sports</option>
                <option value='sundayreview'>Sunday Review</option>
                <option value='technology'>Technology</option>
                <option value='theater'>Theater</option>
                <option value='t-magazine'>T-Magazine</option>
                <option value='upshot'>Upshot</option>
                <option value='us'>U.S.</option>
                <option value='world'>World</option>
              </select>
            </form>
          ) : (
            <h2 onClick={() => navigate(-1)} className='go-back-text'>Go Back</h2>
          )}
        </div>
      </nav>
  )
}

export default Nav;