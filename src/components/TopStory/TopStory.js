import React from 'react';
import Error from '../Error/Error';
import './TopStory.css';

const TopStory = (props) => {
  let topStorySection;
  if(!props.topStory.multimedia) {
    topStorySection = <Error />
  } else {
    topStorySection = (
      <section className='TopStory-container'>
        <img className='TopStory-img' alt={props.topStory.multimedia[1].caption} src={props.topStory.multimedia[1].url} />
        <div className='TopStory-info-contianer'>
          <h2 className='TopStory-title'>{props.topStory.title}</h2>
          <p className='TopStory-abstract'>{props.topStory.abstract}</p>
          <p>{props.topStory.byline}</p>
        </div>
      </section>
    )
  }
  return (
    <div>{topStorySection}</div>
  )
}

export default TopStory;