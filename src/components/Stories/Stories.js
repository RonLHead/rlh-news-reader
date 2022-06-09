import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import TopStory from '../TopStory/TopStory';
import GrayLine from '../GrayLine/GrayLine';
import Error from '../Error/Error';
import './Stories.css';

const Stories = (props) => {
  let storiesList;
  console.log("Top Story", props.topStory.multimedia)
  if(!props.stories.length) {
    storiesList = <h3>{props.error}</h3>
  } else {
    storiesList = props.stories.map((story, i)=> {  
      return (
        <section key={i} id={i}>
          {!story.multimedia ? (
            <Error />
          ) : (
            <Link to={`${story.section}/${i}`} style={{ textDecoration: 'none', color: 'black' }}>
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

          )}
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
          {!props.topStory.multimedia ? (
            <TopStory topStory={props.topStory}/>
          ) : (
            <Link to={`${props.section}/current_top_story`} style={{ textDecoration: 'none', color: 'black' }}>
              <TopStory topStory={props.topStory}/>
            </Link>
          )}
          <GrayLine />
          {storiesList}
        </div>
      )}
      </section>
  )
}

export default Stories;