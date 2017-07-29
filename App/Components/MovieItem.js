import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MovieItemStyle'

import {Tile} from 'react-native-elements'

export default class MovieItem extends Component {

  // static propTypes = {
  //   movie: PropTypes.object,
  // }

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Tile
          imageSrc={{uri: (this.props.movie.image)}}
          title={this.props.movie.title}
          featured
          caption={this.props.movie.caption}
        />
      </View>
    )
  }
}
