import React,{Fragment,useState} from 'react'
import './App.css';
import MovieList from './MovieList';
function App() {
  const [movies,setFetchMovie]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [isError,setIsError]=useState(null)
  async function  fetchMovieHandler(){
    setIsLoading(true)
    setIsError(null)
    try{
      
      const response= await fetch('https://swapi.dev/api/film/')
      if(!response.ok)
      {
        throw new Error('something went wrong!')
      }
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
    }catch(error)
    {
      setIsError(error.message)
      
    }
    setIsLoading(false)
    
  }
  
  return (
    <Fragment>
      <section className='button'>
       <button onClick={fetchMovieHandler}>FetchMovie</button>
      </section>
      {!isLoading && movies.length>0 && <section>
       <MovieList movies={movies}/>
      </section>}
      {!isLoading && movies.length===0 && <h2 className='no-movie'>No Movies Found</h2>}
      {!isLoading && isError && <p>{isError}</p>}
      {isLoading && <h1>Loading......</h1>}
      
    </Fragment>
  );
}

export default App;
