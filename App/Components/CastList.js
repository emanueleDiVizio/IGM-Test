import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'
import CastItem from '../Components/CastItem'

// Styles
import styles from './Styles/MoviesListStyle'

export default class CastList extends Component {
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
      dataSource: ds.cloneWithRows(props.cast)
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
  renderRow(member, onSelect) {
    return (
      <CastItem castMember={member} onSelect={onSelect}/>
    )
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData() {
    return this.state.dataSource.getRowCount() === 0
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView

          horizontal={true}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={(member) => this.renderRow(member, this.props.onSelectCast)}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}
