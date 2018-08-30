export function onPlaylistTracksVideoFinish(newCurrentTrack, newNextTrack){

  return {
    type: 'ON_PLAYLIST_TRACKS_VIDEO_FINISH',
    newCurrentTrack: newCurrentTrack,
    newNextTrack: newNextTrack
  }

}

export function onCurrentPlaylistTrackClick(newCurrentTrack, newNextTrack){

  return {
    type: 'ON_CURRENT_PLAYLIST_TRACK_CLICK',
    newCurrentTrack: newCurrentTrack,
    newNextTrack: newNextTrack
  }

}
