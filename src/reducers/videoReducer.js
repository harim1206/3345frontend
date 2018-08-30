const initialState = {
  // Current Video/Image
  currentVideo: {url: "https://www.youtube.com/watch?v=rtXIdykj2QE"},
  nextVideo: {},
  currentReleaseImgUrl: ""
}

export default function(state = initialState, action){
  switch(action.type){
    case 'FETCH_COLLECTION':
      return {
        ...state,
        currentVideo: {url: "https://www.youtube.com/watch?v=rtXIdykj2QE"}
      }

    case 'ON_RELEASE_CLICK':
      return{
        ...state,
        currentReleaseImgUrl: action.currentReleaseImgUrl
      }

    case 'ON_VIDEO_CLICK':
      return {
        ...state,
        currentVideo: action.newCurrentVideo,
        nextVideo: action.newNextVideo
      }

    case 'ON_CURRENT_PLAYLIST_TRACK_CLICK':
      return{
        ...state,
        currentVideo: action.newCurrentTrack,
        nextVideo: action.newNextTrack,
        currentReleaseImgUrl: action.newCurrentTrack.imgurl
      }

    case 'ON_LIBRARY_VIDEO_FINISH':
      return {
        ...state,
        currentVideo: action.newCurrentVideo,
        nextVideo: action.newNextVideo
      }

    case 'ON_PLAYLIST_TRACKS_VIDEO_FINISH':
      return{
        ...state,
        currentVideo: action.newCurrentTrack,
        nextVideo: action.newNextTrack
      }
      
    default:
      return state
  }
}
