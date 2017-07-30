import React, { Component } from 'react'


// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MovieDetailsContentStyle'
import CastList from './CastList'
function genresToText(genres){
  return  genres.reduce((string, genre, index) =>  string.concat((index != genres.length -1) ? genre.name + " | " : genre.name), [])
}
export default class MovieDetailsContent extends Component {
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

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.genre}>{genresToText(this.props.movie.genres)}</Text>
        {/*<Text style={styles.heading}>Description</Text>*/}
        <Text style={styles.content}>{this.props.movie.overview}</Text>
        <Text style={styles.info}>{this.props.movie.director + " | " + this.props.movie.runtime + " | " + this.props.movie.rating}</Text>
        <CastList cast={this.props.movie.cast.slice(0,10)}/>

      </View>
    );
  }
}
