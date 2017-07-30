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

export const selectConfig = (state) => state.config.data

export function * searchMovie (api, action) {
  const { data } = action
  if(data.split(/\s+/).length > 1){

    // make the call to the api
    const response = yield call(api.searchMovie, data)

    // success?
    if (response.ok) {

      const config = yield select(selectConfig)
      // You might need to change the response here - do this with a 'transform',
      // located in ../Transforms/. Otherwise, just pass the data back from the api.
      yield put(SearchMovieActions.searchMovieSuccess(buildMoviesList(response.data, config)))
    } else {
      yield put(SearchMovieActions.searchMovieFailure())
    }
  }
}
