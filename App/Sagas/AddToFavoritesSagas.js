/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select } from 'redux-saga/effects'
import AddToFavoritesActions from '../Redux/AddToFavoritesRedux'

import MovieDetailsActions from '../Redux/MovieDetailsRedux'

export const selectFavs = (state) => state.favorites.movies

export function * addToFavorites (api, action) {
  const { movie } = action

  const favs = yield select(selectFavs)

  if(favs.filter(fav => fav.id === movie.id).length === 0){
    yield put(AddToFavoritesActions.addToFavoritesSuccess(movie))
    yield put(MovieDetailsActions.toggleFavorite())


  }
  else{
    yield put(AddToFavoritesActions.removeFromFavorites(movie))
    yield put(MovieDetailsActions.toggleFavorite())


  }
}
