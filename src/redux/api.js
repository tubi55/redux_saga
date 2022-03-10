import axios from 'axios';

const api_key = 'cf213181fbdb73a0ce6d71164837c0c8';
const method = 'flickr.photos.search';
const num = 10;

export const getFlickr = async tag => {
  console.log(tag);
  const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&per_page=${num}&tags=${tag}&format=json&nojsoncallback=1`;
  return await axios.get(url);
}