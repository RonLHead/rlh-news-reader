const key = process.env.REACT_APP_API_KEY;

export const fetchStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
    .then(response => response.json())
}