import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import TopStory from '../TopStory/TopStory';
import GrayLine from '../GrayLine/GrayLine';
import './Stories.css';

const Stories = (props) => {
  let storiesList;

  if(!props.stories.length) {
    storiesList = <p>{props.error}</p>
  } else {
    storiesList = props.stories.map((story, i)=> {
      return (
        <section key={i} id={i}>
            <Link to={`/${i}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className='storiesList-container'>
              <div className='storiesList-info-container'>
                <h3 className='story-title'>{story.title}</h3>
                <p className='story-abstract'>{story.abstract}</p>
                <p>{story.byline}</p>
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
            </Link>
          <GrayLine />
        </section>
      )
    })
  }

  return (
    <section>
      {props.error}
      {props.isLoading ? (
        <ReactLoading 
          type='bubbles'
          color='gray'
          width={'10%'}
          height={'10%'}
        />
      ) : (
        <div className='top-story-container'>
          <h2 className='top-story-title'>Top Story</h2>
          <TopStory topStory={props.topStory}/>
          <GrayLine />
            {storiesList}
        </div>
      )}
      </section>
  )
}

export default Stories;