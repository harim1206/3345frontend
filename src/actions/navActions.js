export function onLibraryToggleClick(){

  return {
    type: 'TOGGLE_LIBRARY',
    toggle: false
  }
}

export function onPlaylistTitlesContainerToggleClick(toggle){

  return {
    type: 'TOGGLE_PLAYLIST_TITLES_CONTAINER',
    toggle: toggle
  }

}

export function onUsernameSubmit(){
  return {
    type: 'ON_USERNAME_SUBMIT',
    toggle: false
  }
}


export function onUsernameInputChange(input){
  return {
    type: 'ON_USERNAME_INPUT_CHANGE',
    input: input
  }
}

export function onSearchInputChange(input){
  return {
    type: 'ON_SEARCH_INPUT_CHANGE',
    input: input
  }
}
