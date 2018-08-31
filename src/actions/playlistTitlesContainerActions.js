import { serverUrl } from '../url.js'


export function onPlaylistTitleClick(playlist){

  // const url = `//localhost:3000/api/v1/playlists/${playlist.id}`
  // const url = `https://backend3345.herokuapp.com/api/v1/playlists/${playlist.id}`
  const url = `${serverUrl}/api/v1/playlists/${playlist.id}`

  return function(dispatch){

    dispatch({
      type: 'TOGGLE_LIBRARY',
      toggle: true,
    })

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      const tracks = data.data.attributes.tracks
      dispatch({
        type: 'SHOW_PLAYLIST_TRACKS_CONTAINER',
        currentPlaylistTracks: tracks
      })
    })
  }

}

export function onNewPlaylistInputChange(input){
  return {
    type: 'ON_NEW_PLAYLIST_INPUT_CHANGE',
    input: input
  }
}

export function onNewPlaylistSubmit(postData){
  // const url = 'http://localhost:3000/api/v1/playlists'
  // const url = `https://backend3345.herokuapp.com/api/v1/playlists`
  const url = `${serverUrl}/api/v1/playlists`

  return function(dispatch){

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res =>res.json())
    .then(data =>{
      const playlist = {id: data.data.id, name: data.data.attributes.name}

      return dispatch({
        type: 'ON_NEW_PLAYLIST_SUBMIT',
        playlist: playlist
      })
    })

  }

}

export function onPlaylistTitleDelete(playlist){

  // const playlistUrl = `//localhost:3000/api/v1/playlists/${playlist.id}`
  // const playlistUrl = `https://backend3345.herokuapp.com/api/v1/playlists/${playlist.id}`

  const playlistUrl = `${serverUrl}/api/v1/playlists/${playlist.id}`

  return function(dispatch){

    fetch(playlistUrl,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      // const playlistUrl = '//localhost:3000/api/v1/playlists'
      // const playlistUrl = `https://backend3345.herokuapp.com/api/v1/playlists`
      const playlistUrl = `${serverUrl}/api/v1/playlists`

      fetch(playlistUrl)
      .then(res => res.json())
      .then(data => {

        const newPlaylists = data.data.map((obj)=>{
          return {id: obj.id, name: obj.attributes.name}
        })

        return dispatch({
          type: 'ON_PLAYLIST_TITLE_DELETE',
          newPlaylists: newPlaylists
        })

      })
    })

  }
}
