import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'
import MovieItem from '../Components/MovieItem'

// Styles
import styles from './Styles/MoviesListStyle'

export default class MoviesList extends Component {
  state: {
    dataSource: Object
  }

  constructor(props) {
    super(props)
    /* ***********************************************************
     * STEP 2
     * Teach datasource how to detect if rows are different
     * Make this function fast!  Perhaps something like:
     *   (r1, r2) => r1.id !== r2.id}
     *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(props.movies)
    }
  }

  /* ***********************************************************
   * STEP 3
   * `renderRow` function -How each cell/row should be rendered
   * It's our best practice to place a single component here:
   *
   * e.g.
   return <MyCustomCell title={rowData.title} description={rowData.description} />
   *************************************************************/
  renderRow(movie, onSelect) {
    return (
      <MovieItem movie={movie} onSelect={onSelect}/>
    )
  }

  /* ***********************************************************
   * STEP 4
   * If your datasource is driven by Redux, you'll need to
   * reset it when new data arrives.
   * DO NOT! place `cloneWithRows` inside of render, since render
   * is called very often, and should remain fast!  Just replace
   * state's datasource on newProps.
   *
   * e.g.

   *************************************************************/

  componentWillReceiveProps(newProps) {
    if (newProps.movies) {
      this.setState(prevState => ({
        dataSource: prevState.dataSource.cloneWithRows(newProps.movies)
      }))
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={(movie) => this.renderRow(movie, this.props.onSelectMovie)}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}
