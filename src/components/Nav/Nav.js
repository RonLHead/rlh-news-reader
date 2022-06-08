import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='Nav-bar'>
        <div className='Nav-container'>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <h2 className='home-text'>Home</h2>
          </NavLink>
          <h2 className='saved-stories-text'>Saved Stories</h2>
        </div>
      </nav>
  )
}

export default Nav;