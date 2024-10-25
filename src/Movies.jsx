import React, { useState } from 'react'
import Box from "./Box"

function Movies({movieList,setTest,test}) {

const HandelSubmit=(e)=>{
    e.preventDefault();
    const title=e.target.title.value
    const image=e.target.image.value
    const description=e.target.description.value
    const rating=e.target.rating.value

    fetch("http://localhost:3000/movies",{method:"POST",headers:{'Content-Type': 'application/json'},body:JSON.stringify({title:title,image:image,description:description,rating:rating})})
    .then(function(res){
        return res.json()
    }).then(function(json){
        console.log("done")
        setTest(Math.random())
    }).catch((e)=>{console.log("error")})
}
  return (
    <div>
        {movieList.map(movie=>
            <Box key={movie.id}movie={movie}/>
        )}

        <form action="" onSubmit={HandelSubmit}>
            <input type="text"  name='title' placeholder='title'/><br />
            <input type="text"  name='image' placeholder='image'/><br/>
               < input type="text" name='description' placeholder='description'/><br/>
                <input type="text" name='rating'  placeholder='rating'/><br />
                <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Movies