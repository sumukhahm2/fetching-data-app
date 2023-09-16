import React,{Fragment} from 'react'
import Card from './Card';
const MovieList=(props)=>{
    console.log(props.movies)
    return(
      <Fragment>
        {props.movies.map(movie=>  <Card key={movie.id}>
             <div><h1>{movie.title}</h1></div>
             <div>{movie.openingText}</div>
             <div><h4>{ movie.releaseDate}</h4></div>
           </Card>)}
       
      </Fragment>
    );
}


export default MovieList