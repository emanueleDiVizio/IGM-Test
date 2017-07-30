import {StyleSheet} from 'react-native'

import {HEADER_MAX_HEIGHT} from './MovieDetailComponentStyle'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_MAX_HEIGHT
  },
  info: {textAlign: 'center', marginTop: 8},
  genre: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    color: 'black',
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'system',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 8,
    color: 'black'
  },
  content: {
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    color: 'black',
    textAlign: 'center'
  }
})
