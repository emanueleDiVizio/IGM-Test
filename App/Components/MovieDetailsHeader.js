import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Animated, Image} from 'react-native'
import styles from './Styles/MovieDetailsHeaderStyle'
import {HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE} from './Styles/MovieDetailComponentStyle'
import {Icon, Grid, Row} from 'react-native-elements'
import YouTube from 'react-native-youtube'

import Config from '../Config/AppConfig'

export default class MovieDetailsHeader extends Component {
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

  render() {

    const headerHeight = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });


    const textY = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0 , -209],
      extrapolate: 'clamp'
    });

    const textX = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [16 , 48],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const backgroundColor = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: ['rgba(0,0,0,.6)', 'rgba(0,0,0,.0)'],
      extrapolate: 'clamp',
    });


    return (
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.View style={[styles.bar, {backgroundColor: backgroundColor}]}>

          <Animated.View
            style={[
      styles.backgroundImage,
      {opacity: imageOpacity},
    ]}
          >
            <YouTube
              videoId={this.props.movie.trailerId}   // The YouTube video ID
              fullscreen={false}       // control whether the video should play in fullscreen or inline
              apiKey={Config.youTubeApiKey}
              onReady={e => console.tron.log(e)}
              onChangeState={e => console.tron.log(e)}
              onChangeQuality={e => console.tron.log(e)}
              onError={e => console.tron.log(e)}
              play={false}
              showFullscreenButton={true}
              controls={2}
              showinfo={true}
              style={styles.video}
            />

          </Animated.View>
          <Icon
            iconStyle={styles.icon}
            name='arrow-back'
            onPress={this.props.onBack}
            color='#fff'/>
          <Animated.Text style={[styles.title, { transform: [{translateY: textY}, {translateX: textX}]}]}>{this.props.movie.title}</Animated.Text>
        </Animated.View>

      </Animated.View>
    )
  }
}
