import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MovieDetailScreenStyle'

import MovieDetailComponent from '../Components/MovieDetailComponent'

class MovieDetailScreen extends Component {
  render () {
    return (
      <MovieDetailComponent movie={this.props.movie}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    movie: state.movieDetails.movie

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen)
