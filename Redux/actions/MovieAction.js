import {MoviesAll, popularMovies} from '../types/moviesType';
import {allMovies} from '../../src/tools/getMovies';
export const getMovies = page => {
  return async dispatch => {
    const payload = await allMovies(page);
    dispatch({type: MoviesAll, data: payload});
  };
};

