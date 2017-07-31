import { StyleSheet } from 'react-native'
import {HEADER_MAX_HEIGHT} from './MovieDetailComponentStyle'
export const FONT_SIZE = 22;
export default StyleSheet.create({
  container: {
    flex: 1
  },
  bar: {
    height: HEADER_MAX_HEIGHT,
    backgroundColor: 'rgba(0,0,0,.6)'

  },
  icon: {
    marginTop: 16,
    marginLeft: 16,
    alignSelf: 'flex-start'
  },
  title: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: FONT_SIZE,
    top: HEADER_MAX_HEIGHT - FONT_SIZE - 16,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  video: {
    height: HEADER_MAX_HEIGHT,
    alignSelf: 'stretch'
  }
})
