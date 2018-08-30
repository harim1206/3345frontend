const initialState = {
  currentTrack: {},
  nextTrack: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case 'ON_PLAYLIST_TRACKS_VIDEO_FINISH':
      return{
        ...state,
        currentTrack: action.newCurrentTrack,
        nextTrack: action.newNextTrack
      }

    case 'ON_CURRENT_PLAYLIST_TRACK_CLICK':
      return{
        ...state,
        currentTrack: action.newCurrentTrack,
        nextTrack: action.newNextTrack
      }
      
    default:
      return state
  }
}
