import React, { Component } from 'react'


// import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  ListView} from 'react-native'

import MovieItem from './MovieItem'
import styles from './Styles/MoviesListStyle'


export default class MoviesList extends Component {
  // static propTypes = {
  //   movies: PropTypes.array.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    if (this.props.movies) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(
        this.props.movies
      );
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.movies !== this.props.movies) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          nextProps.movies
        )
      });
    }
  }
  renderRow = (movie) => {
    return this.renderMovieItem(movie);
  }

  renderMovieItem(movie) {
    return (
      <MovieItem movie={movie}/>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );
  }
}
