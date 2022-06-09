const key = process.env.REACT_APP_API_KEY;

export const fetchStories = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
    .then(response => response.json())
}