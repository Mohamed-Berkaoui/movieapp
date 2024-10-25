
import { useEffect, useState } from 'react';
import './App.css';
import Movies from './Movies';
import Nav from './Nav';


// "// npx json-server db.json  to start the backend server"

function App() {
  const [movies,setMovies]=useState([])
  const [text,setText]=useState('')
  const [test,setTest]=useState(true)

  useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(res=>res.json())
    .then(json=>{setMovies(json)})
  },[test])


function HandleSearch(e){
  setText(e.target.value)
}

  return (
    <div className="App">
<Nav HandleSearch={HandleSearch}/>
<Movies movieList={movies.filter(movie=>movie.title.includes(text))} setTest={setTest}></Movies>
    </div>
  );
}

export default App;
