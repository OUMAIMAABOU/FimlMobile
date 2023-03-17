// 2-create reducer to set state and change it
import {MoviesAll,publ} from '../types/moviesType';

const init = {moviess : [], pageCount: 0};
export const MoviesReducer = (state = init, action) => {
  switch (action.type) {
    case MoviesAll:
      return {moviess: action.data};
    default:
      return state;
  }
};
