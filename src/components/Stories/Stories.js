import React, { useEffect, useState } from 'react';
import { fetchStories } from '../../apiCalls';
import TopStory from '../TopStory/TopStory';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [topStory, setTopStory] = useState({});

  const getStories = () => {
    fetchStories()
      .then(data => {
        console.log(data.results)
        return (
          setTopStory(data.results.shift()),
          setStories(data.results)
        )
      })
      .catch(err => 
        setError('Oops, soemthing went wrong. Please try aain later.')
      )
  }

  useEffect(() => {
    getStories()
  }, [])

  const storiesList = stories.map(story => {
    console.log(story)
    return(
      <div>
        <p>{story.title}</p>
      </div>
    )
  })
  return (
    <div>
      <TopStory topStory={topStory}/>
      {error}
      {storiesList}
    </div>
  )
}

export default Stories;