import axios from 'axios';
const path = 'https://api.themoviedb.org/3';
Api_key='e6f0a580cb12c89a64f3d9deb6e801f8'
export const allMovies = async() => {
  response = await axios.get(` ${path}/discover/movie?api_key=${Api_key}`)
  return response.data.results;
};
export const upcomingMovie = async () => {
  response = await axios.get(`${path}/movie/upcoming?api_key=${Api_key}`,);
  return response.data.results;
};
export const popularMovies = async () => {
  response = await axios.get(`${path}/movie/popular?api_key=${Api_key}`);
  return response.data.results;
};
