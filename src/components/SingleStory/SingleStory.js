import { useParams } from "react-router-dom";

const SingleStory = (props) => {
  const { id } = useParams();
  const story = props.story[id]
  console.log(story)

  let storyDetails;

  if(!story) {
    storyDetails = <p>Loading...</p>
  } else {
    storyDetails = (
      <div>
        <h1>{story.title}</h1>
        <p>Story details</p>
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