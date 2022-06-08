import Nav from '../Nav/Nav';
import Stories from '../Stories/Stories';
import './App.css';

const App = () => {
  return (
    <main>
      <header className='App-header'>
        <h1 className='header-title'>My News Reader</h1>
      </header>
      <Nav />
      <Stories />
    </main>
  );
}

export default App;
