import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { fetchStories } from '../../apiCalls';
import TopStory from '../TopStory/TopStory';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [topStory, setTopStory] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const getStories = () => {
    fetchStories()
      .then(data => {
        console.log(data.results)
        setTopStory(data.results.shift())
        setIsLoading(false)
        return setStories(data.results)
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
      {isLoading ? (
        <ReactLoading 
          type='bubbles'
          color='gray'
          width={'10%'}
          height={'10%'}
        />
      ) : <TopStory topStory={topStory}/>}
      
      {error}
      {storiesList}
    </div>
  )
}

export default Stories;