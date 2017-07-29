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
import SearchMovieActions from '../Redux/SearchMovieRedux'
import buildMoviesList from '../Transforms/BuildMoviesList'

export const selectBaseUrl = (state) => {
  console.tron.log(state)

  return state.config.data.images.base_url
}
export const selectSize = (state) => state.config.data.images.poster_sizes[4]

export function * searchMovie (api, action) {
  const { data } = action
  if(data.split(/\s+/).length > 1 || data.length > 2){

    // make the call to the api
    const response = yield call(api.searchMovie, data)

    // success?
    if (response.ok) {

      const base_url = yield select(selectBaseUrl)
      const size = yield select(selectSize)
      // You might need to change the response here - do this with a 'transform',
      // located in ../Transforms/. Otherwise, just pass the data back from the api.
      yield put(SearchMovieActions.searchMovieSuccess(buildMoviesList(response.data, base_url, size)))
    } else {
      yield put(SearchMovieActions.searchMovieFailure())
    }
  }
}
