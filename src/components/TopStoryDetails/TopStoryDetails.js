import { Link } from "react-router-dom";

const TopStoryDetails = (props) => {
  const tStory = props.topStory;

  let tSDetails;

  if(!tStory) {
    tSDetails = <p>Article is loading...</p>
  } else {
    tSDetails = (
      <div className="SingleStory-container">
        <h1 className="SingleStory-title">{tStory.title}</h1>
        <h2>{tStory.byline}</h2>
        <p>{tStory.published_date}</p>
        <a href={tStory.url}>
          <img className='SingleStory-img' alt={tStory.multimedia[0].caption} src={tStory.multimedia[0].url}/>
        </a>
        <p>{tStory.multimedia[0].caption}</p>
        <p className="SingleStory-abstract">{tStory.abstract} To read the rest of this article, click <a href={tStory.url}>here.</a></p>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <p className="back-link">Back to main page.</p>
        </Link>
      </div>
    )
  }
  return (
    <p>{tSDetails}</p>
  )
}

export default TopStoryDetails;