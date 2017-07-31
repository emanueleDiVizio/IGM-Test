import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import SearchMovieActions from '../Redux/SearchMovieRedux'
import MovieDetailsActions from '../Redux/MovieDetailsRedux'

import MoviesHomeComponent from '../Components/MoviesHomeComponent'
import {Header, Grid, Row, List, ListItem} from 'react-native-elements'

// Styles
import styles from './Styles/MovieSearchScreenStyle'


import SearchHeaderComponent from 'react-native-search-header';

const SearchHeaderView = SearchHeaderComponent();




class MovieSearchScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "flex-start"}}>
        <View style={{flex: 1}}><Header
          rightComponent={{icon: "search", onPress: () => this.searchHeader.show(), color: "#fff"}}
          centerComponent={{ text: 'Favorite Movies', style: { color: '#fff' } }}
          backgroundColor="#43b1ff"
          innerContainerStyles={{ height: 56}}
          outerContainerStyles={{height: 56}}
        /><SearchHeaderView
          ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
          statusHeightOffet = { 0 }
          onSearchChange={(event) => this.props.searchMovie(event.nativeEvent.text)}
          onSearch={(event) => this.props.searchMovie(event.nativeEvent.text)}
          onHidden={() => this.props.stopSearch()}
        />
        </View>



        <View style={{flex: 9.5}}>
          <MoviesHomeComponent isSearching={this.props.isSearching} favorites={this.props.favorites} movies={this.props.movies} goToMovie={this.props.goToMovie}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    movies: state.searchMovie.movies,
    favorites: state.favorites.movies,
    isSearching: state.searchMovie.searching

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (movie) => dispatch(SearchMovieActions.searchMovieRequest(movie)),
    goToMovie: (movie) => dispatch(MovieDetailsActions.movieDetailsRequest(movie)),
    stopSearch: () => dispatch(SearchMovieActions.stopSearching())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchScreen)
