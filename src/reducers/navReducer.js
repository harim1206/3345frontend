const initialState = {
  playlistTitlesContainerDisplay: false,
  playlistTracksContainerDisplay: false,
  enterUsernameDisplay: true,
  usernameInput: '',
  searchInput: ''
}


export default function(state = initialState, action){
  switch(action.type){

    case 'TOGGLE_LIBRARY':
      return {
        ...state,
        playlistTracksContainerDisplay: action.toggle
      }

    case 'TOGGLE_PLAYLIST_TITLES_CONTAINER':
      return {
        ...state,
        playlistTitlesContainerDisplay: action.toggle
      }

    case 'ON_USERNAME_SUBMIT':
      return {
        ...state,
        enterUsernameDisplay: action.toggle
      }

    case 'ON_USERNAME_INPUT_CHANGE':
      return {
        ...state,
        usernameInput: action.input
      }

    case 'ON_SEARCH_INPUT_CHANGE':
      return {
        ...state,
        searchInput: action.input
      }

    default:
      return state
  }
}
