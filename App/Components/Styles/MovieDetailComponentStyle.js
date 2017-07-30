import { StyleSheet } from 'react-native'


export  const HEADER_MAX_HEIGHT = 260;
export const HEADER_MIN_HEIGHT = 60;
export const HEADER_SCROLL_DISTANCE = (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT);

export default StyleSheet.create({
  container: {
    flex: 1
  },
  fill: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
})
