import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, } from 'react-native'
import styles from './Styles/MovieDetailComponentStyle'

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT);

export default class MovieDetailComponent extends Component {
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
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }


  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={{    marginTop: HEADER_MAX_HEIGHT}}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render () {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });


    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
    )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <Animated.Image
            style={[
      styles.backgroundImage,
      {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
    ]}
            source={{uri: 'http://lorempixel.com/400/200/'}}
          />
          <View style={styles.bar}>
            <Text style={styles.title}>Title</Text>
          </View>
        </Animated.View>
      </View>
    )
  }
}
