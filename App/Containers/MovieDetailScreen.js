import React, {Component} from 'react'
import {ScrollView, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MovieDetailScreenStyle'

import CollapsingHeaderScrollView from '../Components/CollapsingHeaderScrollView'
import MovieDetailsContent from '../Components/MovieDetailsContent'
import MovieDetailsHeader from '../Components/MovieDetailsHeader'
import AppNavigation from '../Navigation/AppNavigation'

class MovieDetailScreen extends Component {
  render() {
    return (
      <CollapsingHeaderScrollView

        header={<MovieDetailsHeader movie={this.props.movie} onBack={this.props.back}/>}

        content={<MovieDetailsContent movie={this.props.movie}/>}



      >
        </CollapsingHeaderScrollView>
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
    back: () => dispatch(AppNavigation.router.getActionForPathAndParams('MovieSearchScreen'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen)
