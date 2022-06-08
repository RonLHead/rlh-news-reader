import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { fetchStories } from '../../apiCalls';
import TopStory from '../TopStory/TopStory';
import GrayLine from '../GrayLine/GrayLine';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [topStory, setTopStory] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const getStories = () => {
    fetchStories()
      .then(data => {
        return (
          setTopStory(data.results.shift()),
          setStories(data.results),
          setIsLoading(false)
        )
      })
      .catch(err => 
        setError('Oops, something went wrong. Please try again later.')
      )
  }

  useEffect(() => {
    getStories()
  }, [])

  let storiesList;

  if(!stories.length) {
    storiesList = <p>{error}</p>
  } else {
    storiesList = stories.map(story => {
      return (
        <section>
          <div className='storiesList-container'>
            <div className='storiesList-info-container'>
              <h3 className='story-title'>{story.title}</h3>
              <p className='story-abstract'>{story.abstract}</p>
            </div>
            {!story.multimedia ? (
              <ReactLoading 
                type='bubbles'
                color='gray'
                width={'10%'}
                height={'10%'}
              />
            ) : <img className='story-img' alt={story.multimedia[2].caption} src={story.multimedia[2].url}/>}
          </div>
          <GrayLine />
        </section>
      )
    })
  }

  return (
    <section>
      {error}
      {isLoading ? (
        <ReactLoading 
          type='bubbles'
          color='gray'
          width={'10%'}
          height={'10%'}
        />
      ) : (
        <div className='top-story-container'>
          <h2 className='top-story-title'>Top Story</h2>
          <TopStory topStory={topStory}/>
          <GrayLine />
          {storiesList}
        </div>)}
    </section>
  )
}

export default Stories;