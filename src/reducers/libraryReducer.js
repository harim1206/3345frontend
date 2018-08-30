const initialState = {
  // Parsed Releases
  libraryReleases: [],
  //Current Release
  currentRelease: {},
  nextRelease: {},
  currentReleaseTracks: [],
  currentReleaseVideos: [],
  //Playlists
  playlists: []
}

export default function(state = initialState, action){
  switch(action.type){
    case 'FETCH_COLLECTION':
      return {
        ...state,
        libraryReleases: action.parsedData,
        currentRelease: action.parsedData[0],
        nextRelease: action.parsedData[1]
      }

    case 'FETCH_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case 'ON_RELEASE_CLICK':
      return {
        ...state,
        currentRelease: action.currentRelease,
        nextRelease: action.nextRelease,
        currentReleaseTracks: action.currentReleaseTracks,
        currentReleaseVideos: action.currentReleaseVideos
      }

    case 'ON_LIBRARY_VIDEO_FINISH':
      return {
        ...state,
        currentRelease: action.newCurrentRelease,
        nextRelease: action.newNextRelease
      }

    case 'ON_SORT':
      return {
        ...state,
        libraryReleases: action.sortedData
      }

    case 'ON_NEW_PLAYLIST_SUBMIT':
      return {
        ...state,
        playlists: [...state.playlists, action.playlist]
      }

    case 'ON_PLAYLIST_TITLE_DELETE':
      return {
        ...state,
        playlists: action.newPlaylists
      }

    default:
      return state
  }
}
