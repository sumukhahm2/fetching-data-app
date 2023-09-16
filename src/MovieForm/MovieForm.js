import React,{useState} from 'react'
import Card from '../Card';
import  './MovieForm.css'
const MovieForm=(props)=>{
    const [updatedTitle,setTitle]=useState('')
    const [updatedText,setText]=useState('')
    const [updatedDate,setDate]=useState('')
    const titleChangeHandler=(event)=>{
      setTitle(event.target.value)
      
    }
    const textChangeHandler=(event)=>{
        setText(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
    }
    const formSubmitHandler=(event)=>{
      event.preventDefault()

    props.movieData( {
        title:updatedTitle,
        openingText:updatedText,
        releaseDate:updatedDate
      })
      
    }
    return(
        <Card>
        <form className='form' onSubmit={formSubmitHandler}>
            <label  >Title</label> <br/>
            <input type='text' className='input' onChange={titleChangeHandler}/> <br/>
            <label>Opening Text</label> <br/>
            <textarea type='text' className='text-area' onChange={textChangeHandler}/> <br/>
            <label>Release Date</label> <br/>
            <input type='text'  className='input' onChange={dateChangeHandler}/> <br/>
            <button>Add Movie</button>
         </form>
          
        </Card>
    );
}

export default MovieForm