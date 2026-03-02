import { useState } from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList(){
    const [movies, setMovies] = useState([
        
            {id: 0, title: 'Man of Steel', year: 2010},
            {id: 1, title: 'The Matrix', year: 2017},
            {id: 2, title: 'Lord of the Rings', year: 2013},
            {id: 3, title: 'The Case for Christ', year: 2006},
        
    ]);

    

    const addButtonHandler = () => {

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