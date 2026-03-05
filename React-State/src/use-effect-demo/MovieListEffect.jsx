import { useState } from "react";
import MovieListItem from "./MovieListItemEffect";

export default function MovieListEffect(){
    const [movies, setMovies] = useState([
        
            {id: 1, title: 'Man of Steel', year: 2010},
            {id: 2, title: 'The Matrix', year: 2017},
            {id: 3, title: 'Lord of the Rings', year: 2013},
            {id: 4, title: 'The Case for Christ', year: 2006},
        
    ]);

    

    const addButtonHandler = () => {
        setMovies(oldState => [
            {id: 0, title: 'Harry Potter', year: 2016},
            ...oldState,
        ]);
        //setMovies(oldMovies => oldMovies.slice(1))
    }

    return (
        <>
        <h2>Movie List</h2>
        <ul>
            {movies.map(movie => <MovieListItem key={movie.id} title={movie.title} year={movie.year} />)}
            
        </ul>
        <button onClick={addButtonHandler}>Add</button>
        </>
    );
}