import React, {Component} from 'react'


// import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native'
import {Grid, Row, Col, Rating, Icon} from 'react-native-elements'
import styles from './Styles/MovieDetailsContentStyle'
import CastList from './CastList'
function genresToText(genres) {
  return genres.reduce((string, genre, index) => string.concat((index != genres.length - 1) ? genre.name + " | " : genre.name), [])
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstDetails}>
          <Text style={styles.genre}>{genresToText(this.props.movie.genres)}</Text>
          {/*<Text style={styles.runtime}>{this.props.movie.runtime}m</Text>*/}
        </View>
        <Text style={styles.content}>{this.props.movie.overview}</Text>

        <View style={styles.detail}>
          <View style={styles.posterColumn}>
            <Image style={styles.poster} source={{uri: this.props.movie.poster}}/>
          </View>
          <View style={styles.detailRight}>

            <Text
              style={styles.detailInfo}> <Text style={{fontWeight: 'bold'}}>Directed by: </Text>{this.props.movie.director}</Text>

            <Text
              style={styles.detailInfo}> <Text style={{fontWeight: 'bold'}}>Runtime: </Text>{this.props.movie.runtime}m</Text>
            <Rating
              fractions={1}
              style={styles.rating}
              imageSize={20}
              readonly
              startingValue={this.props.movie.rating /2}
            />
            <View style={{flexDirection: 'row', marginTop: 8}}>

              <Icon name='share'  color="#43B1FF" reverse raised size={16} onPress={this.props.onShare}/>
              <Icon name='favorite' color="#43B1FF" reverseColor={this.props.movie.favorite ? "#fff542" : "#FFFFFF"} reverse raised size={16} onPress={this.props.onAddToFavorite}/>

            </View>
          </View>


        </View>
        <CastList cast={this.props.movie.cast.slice(0,10)}/>

      </View>
    );
  }
}
