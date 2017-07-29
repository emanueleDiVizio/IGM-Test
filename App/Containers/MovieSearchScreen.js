import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import MoviesList from '../Components/MoviesList'
import {Header, Grid, Row, List, ListItem} from 'react-native-elements'

// Styles
import styles from './Styles/MovieSearchScreenStyle'

const movies = [{title: "KEWBAB", image: "http://lorempixel.com/400/200/", caption:" ALLAHU KEBABA"}, {title: "KEWBAB", image: "http://lorempixel.com/400/200/", caption:" ALLAHU KEBABA"}]

import SearchHeaderComponent from 'react-native-search-header';

const SearchHeaderView = SearchHeaderComponent();

class MovieSearchScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "flex-start"}}>
        <View style={{flex: 1}}><Header
          rightComponent={{icon: "search", onPress: () => this.searchHeader.show(), color: "#fff"}}
          centerComponent={{ text: 'Best Movies', style: { color: '#fff' } }}
          backgroundColor="#43b1ff"
          innerContainerStyles={{ height: 56}}
          outerContainerStyles={{height: 56}}
        /><SearchHeaderView
          ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
          statusHeightOffet = { 0 }
          onGetSearchAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
        />
        </View>



        <View style={{flex: 9.5}}>
          <MoviesList movies={movies}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchScreen)
