import axios from 'axios';
const path = 'https://api.themoviedb.org/3';
Api_key = 'e6f0a580cb12c89a64f3d9deb6e801f8';
export const pathImage = 'https://image.tmdb.org/t/p/w1280';

export const allMovies = async page => {
  response = await axios.get(
    ` ${path}/discover/movie?api_key=${Api_key}&page=${page}`,
  );
  return response.data.results;
};
export const upcomingMovie = async page => {
  response = await axios.get(`${path}/movie/upcoming?api_key=${Api_key}&page=${page}`,);
  return response.data.results;
};
export const popularMovies = async (page) => {
  response = await axios.get( `${path}/trending/all/day?api_key=${Api_key}&page=${page}`,);
  return response.data.results;
};

export const Detail = async id => {
  try {
    response = await axios.get(`${path}/movie/${id}/videos?api_key=${Api_key}`);
    return response.data.results[0].key;
  } catch (e) {
    return e;
  }
};
