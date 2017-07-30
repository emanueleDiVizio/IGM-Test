import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/CastItemStyle'

export default class CastItem extends Component {
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
        <Image style={styles.image} source={{uri: this.props.castMember.profile_path}}/>
        <Text style={styles.character}>{this.props.castMember.role}</Text>
        <Text style={styles.name}>{this.props.castMember.name}</Text>
      </View>
    )
  }
}
