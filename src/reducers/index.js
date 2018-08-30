import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer'
import videoReducer from './videoReducer'
import navReducer from './navReducer'
import playlistTitlesContainerReducer from './playlistTitlesContainerReducer'
import playlistTracksContainerReducer from './playlistTracksContainerReducer'



export default combineReducers({
  library: libraryReducer,
  video: videoReducer,
  nav: navReducer,
  playlistTitlesContainer: playlistTitlesContainerReducer,
  playlistTracksContainer: playlistTracksContainerReducer

})
