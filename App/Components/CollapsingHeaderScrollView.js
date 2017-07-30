import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import styles from './Styles/MovieDetailComponentStyle'

export default class CollapsingHeaderScrollView extends Component {
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


  render() {
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
    )}
        >
          {this.props.content}
        </ScrollView>
        {React.cloneElement(this.props.header, { scrollY: this.state.scrollY })}
      </View>
    )
  }
}
