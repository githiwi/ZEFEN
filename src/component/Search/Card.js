import React from 'react'

export default function Card({artist}) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img className="br-100 h3 w3 dib" alt={artist.first_name} src={process.env.PUBLIC_URL + artist.imgPath} />
    <div>
      <h2>{artist.first_name}</h2>
      <h2>{artist.last_name}</h2>
    </div>
  </div>
  )
}
