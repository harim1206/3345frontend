const initialState = {
  currentPlaylistTracks: [],
  newPlaylistInput: '',
}


export default function(state = initialState, action){

  switch(action.type){

    case 'SHOW_PLAYLIST_TRACKS_CONTAINER':
      return {
        ...state,
        currentPlaylistTracks: action.currentPlaylistTracks
      }

    case 'ON_NEW_PLAYLIST_INPUT_CHANGE':
      return {
        ...state,
        newPlaylistInput: action.input
      }

    default:
      return state
  }
}
