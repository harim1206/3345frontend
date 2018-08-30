// componentDidMount helper functions

// returns a shuffled array
export const shuffleArr = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// takes in raw fetch json data and returns clean data for state
export const parseJSONtoData = (releases) => {
  return releases.map((release)=>{
    let data = release.basic_information

    return(
      {
        id: releases.indexOf(release),
        artist : data.artists[0].name,
        title : data.title,
        label : data.labels[0].name,
        catno : data.labels[0].catno,
        resource_url: data.resource_url,
        date_added: release.date_added
      }
    )
  })
}
