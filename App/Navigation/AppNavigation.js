import { StackNavigator } from 'react-navigation'
import MovieDetailScreen from '../Containers/MovieDetailScreen'
import MovieSearchScreen from '../Containers/MovieSearchScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MovieDetailScreen: { screen: MovieDetailScreen },
  MovieSearchScreen: { screen: MovieSearchScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MovieDetailScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
