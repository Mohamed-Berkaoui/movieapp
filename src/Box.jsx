import React, { useState } from 'react'

function Box({movie}) {
  return (
    <div>
     <h1>{movie.title}</h1>
     <p>{movie.decription}</p>
     <p>Rating:{movie.rating}</p>

    </div>
  )
}

export default Box