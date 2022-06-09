import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { fetchStories } from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Stories from '../Stories/Stories';
import SingleStory from '../SingleStory/SingleStory';
import TopStoryDetails from '../TopStoryDetails/TopStoryDetails';
import './App.css';

const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [topStory, setTopStory] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const getStories = () => {
    fetchStories()
      .then(data => {
        setTopStory(data.results.shift())
        setStories(data.results)
        setIsLoading(false)  
      })
      .catch(err => 
        setError('Oops, something went wrong. Please try again later.')
      )
  }

  useEffect(() => {
    getStories()
  }, [])

  return (
    <main>
      <header className='App-header'>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h1 className='header-title'>My News Reader</h1>
        </NavLink>
      </header>
      <Nav />
      {isLoading ? (
        <ReactLoading 
          type='bubbles'
          color='gray'
          width={'10%'}
          height={'10%'}
        />
      ) : (
        <Routes>
          <Route index element={<Stories stories={stories} error={error} topStory={topStory} isLoading={isLoading}/>} />
          <Route path=':id' element={<SingleStory story={stories} />} />
          <Route path='current_top_story' element={<TopStoryDetails topStory={topStory} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
