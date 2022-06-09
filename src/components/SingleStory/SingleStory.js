import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleStory = (props) => {
  const { id } = useParams();
  const story = props.story[id]
  const tStory = props.topStory;
  console.log(props.story)

  let storyDetails;

  if(!story) {
    storyDetails = <p>Article is loading...</p>
  } else {
    storyDetails = (
      <div className="SingleStory-container">
        <h1 className="SingleStory-title">{story.title}</h1>
        <h2>{story.byline}</h2>
        <p>{story.published_date}</p>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <img className='SingleStory-img' alt={story.multimedia[0].caption} src={story.multimedia[0].url}/>
        </a>
        <p>{story.multimedia[0].caption}</p>
        <p className="SingleStory-abstract">{story.abstract} To read the rest of this article, click <a 
          href={story.url} target="_blank" rel="noopener noreferrer" className="link-text">here.</a>
        </p>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <p className="back-link">Back to main page.</p>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {storyDetails}
    </div>
  )
}

export default SingleStory