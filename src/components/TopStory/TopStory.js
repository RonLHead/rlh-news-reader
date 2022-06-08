import React, { useEffect, useState } from 'react';
import './TopStory.css';

const TopStory = (props) => {
  return (
    <section className='TopStory-container'>
      <img className='TopStory-img' alt={props.topStory.multimedia[1].caption} src={props.topStory.multimedia[1].url}/>
      <div className='TopStory-info-contianer'>
        <h2 className='TopStory-title'>{props.topStory.title}</h2>
        <p className='TopStory-abstract'>{props.topStory.abstract}</p>
        <p>{props.topStory.byline}</p>
      </div>
    </section>
  )
}

export default TopStory;