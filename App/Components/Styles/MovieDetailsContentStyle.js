import {StyleSheet} from 'react-native'

import {HEADER_MAX_HEIGHT} from './MovieDetailComponentStyle'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_MAX_HEIGHT,
    backgroundColor: 'white'
  },
  firstDetails: {
    flex: 1,
    flexDirection: 'row'
  },
  detailRight: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  detailInfo: {textAlign: 'center', marginTop: 4, marginBottom: 4},
  rating: {marginTop: 4},
  genre: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  runtime: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 16,
    marginRight: 16,
    marginTop: 16,
  },
  poster: {
    height: 277,
    width: 185,
    borderWidth: 2,
    borderColor: 'black'
  },
  posterColumn: {
    marginLeft: 16,
    alignSelf: 'center',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  content: {
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center'
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#43b1ff',
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
  }
})
