# 33/45

Video Walkthrough

[![VIDEO Walkthrough](https://img.youtube.com/vi/eUfrS3I5nzc/0.jpg)](https://www.youtube.com/watch?v=eUfrS3I5nzc)

## Description

33/45 is a music player/library for your [Discogs](https://www.discogs.com/) collection. As an avid vinyl collector I have always found it frustrating not being able to easily browse, organize, and listen to my records. Yes, the whole point of records is that they are analog. However, when you own hundreds or thousands of them, you forget what half of them are or what they sound like. Wouldn’t it be nice to have an “iTunes” for your collection?

Especially for DJ’s whose purpose is to play the right record at the right time, nothing is more important than an intimate familiarity of his collection. Digital DJ’s can organize their library into different playlists by mood, genre, tempo, artist, label & others, which makes that right track instantaneously available. A vinyl DJ, in contrast, is praying the mood and tempo of record he just picked out matches his memory, after shuffling through his entire bag looking for it. A digital DJ can familiarize himself with his playlists on iTunes anytime anywhere, but a vinyl DJ has to be at his turntables at home. 33/45 solves this problem.

[Discogs](https://www.discogs.com/) is the definitive database and marketplace for vinyl records, like a combination of IMDB & eBay. Entering a Discogs username into 33/45 pulls the user's collection from Discogs API (The website’s users’ collections are public). The application is built with React/Redux in the front end, and Ruby on Rails for the back end.

## Usage

To turn off the video's autoplay, set playing attribute equal to 'false' in the Video component, located in 'components/Video.js'

```javascript
<ReactPlayer
  playing={false}
  controls={true}
  ...
/>
```

On application load, enter a discogs username.

Examples:
- harim1206 (mine)
- Studebakerhawk
- ghood

It will take a moment for the discogs collection to load. Once loaded, try clicking a release (a table row), which will expand to show its track details, and available youtube links. The youtube links can be clicked to load.

You can save a youtube link to a playlist by using the playlist dropdown next to it.

Clicking the 'Playlists' button in the navigation bar will toggle the playlists, with options to create a new custom playlist and deleting existing ones. Clicking a playlist title will load the playlist. You can click the 'Library' button that appears in the navigation bar to go back to the main library.
