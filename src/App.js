import React,{Fragment,useState} from 'react'
import './App.css';
import MovieList from './MovieList';
function App() {
  const [movies,setFetchMovie]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  async function  fetchMovieHandler(){
    setIsLoading(true)
   const response= await fetch('https://swapi.dev/api/films/')
   const data=await response.json();
   const transformedMovies=data.results.map((movie)=>{
    return {
      id:movie.episode_id,
      title:movie.title,
      openingText:movie.opening_crawl,
      releaseDate:movie.release_date
    }
   })
   setFetchMovie(transformedMovies)
   setIsLoading(false)
  }
  console.log(movies)
  return (
    <Fragment>
      <section className='button'>
       <button onClick={fetchMovieHandler}>FetchMovie</button>
      </section>
      {!isLoading && movies.length>0 && <section>
       <MovieList movies={movies}/>
      </section>}
      {!isLoading && movies.length===0 && <h2 className='no-movie'>No Movies Found</h2>}
      {isLoading && <h1>Loading......</h1>}
      
    </Fragment>
  );
}

export default App;
