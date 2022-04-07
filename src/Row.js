import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Row.css"

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

// temporary memory
  const [movies, setMovies] = useState([]);
// snippet of code that runs on a specific condition
  useEffect(() =>{
      async function fetchData(){
        // if [], run once when t he row loads, and dont run again
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return requests;
    }   
    fetchData();
},[fetchUrl]);

console.table(movies);


  return (
      <div className="row">
          <h2>{title}</h2>
          <div className="row__posters">
              {movies.map((movie)=>(
              <img 
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              />
          ))} 
          </div>
          
          
      </div>
  )
}

export default Row
