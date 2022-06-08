import Nav from '../Nav/Nav';
import Stories from '../Stories/Stories';
import { NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <main>
      <header className='App-header'>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h1 className='header-title'>My News Reader</h1>
        </NavLink>
      </header>
      <Nav />
      <Stories />
    </main>
  );
}

export default App;
