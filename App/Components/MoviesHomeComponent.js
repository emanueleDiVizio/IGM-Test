import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './Styles/MoviesHomeComponentStyle'
function buildState(props){
  return {
    displayMovies: props.isSearching && props.movies.length > 0,
    displayFavorites: props.favorites.length > 0,
    favorites: props.favorites,
    movies: props.movies,
    fetching: props.fetching
  }
}

import MoviesList from '../Components/MoviesList'

export default class MoviesHomeComponent extends Component {

  state: {
    displayMovies: boolean,
    displayFavorites: boolean,
    fetching: boolean,
    movies: array,
    favorites: array
  }

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }



  constructor(props) {
    super(props)
    this.state = buildState(props)
  }

  componentWillReceiveProps(newProps) {
    this.setState(prevState => (buildState(newProps)))

  }

  render () {
    console.tron.log(this.state)
    let props = this.props
    return (
      <View style={styles.container}>
        {this.state.displayMovies ?
          (this.state.fetching ? <Text>Fetching...</Text> : <MoviesList movies={ this.state.movies} onSelectMovie={props.goToMovie}/>)
          : this.state.displayFavorites ?
            <MoviesList movies={ this.state.favorites} onSelectMovie={props.goToMovie}/> :
        <View style={styles.noFavs}>
          <Icon
            containerStyle={styles.icon}
            size={64}
            name='ghost'
            type='material-community'
            color='#808080'
          />
          <Text style={styles.noFavText}>You have no favorite movies yet!{"\n"}
          Quick, push the search button and find some movies!</Text>

        </View>}

      </View>
    )
  }
}
