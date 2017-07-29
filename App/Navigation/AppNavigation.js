import { StackNavigator } from 'react-navigation'
import MovieSearchScreen from '../Containers/MovieSearchScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MovieSearchScreen: { screen: MovieSearchScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MovieSearchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
