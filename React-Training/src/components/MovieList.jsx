import { useState } from "react";
import MovieListDetails from "./MovieListDetails";

export default function MovieList(){

    const [movies, setMovie] = useState([
        {id: 1, title: 'The Matrix', year: 1999},
        {id: 2, title: 'Man of Steel', year: 2010},
        {id: 3, title: 'Lord of the Rings', year: 2005},
    ]);

    const addButtonHandler = () => {
        setMovie( oldMovie => {
            let newMovie = [...oldMovie];
            newMovie.push({id: 4, title: "Society of Snow", year: 2004})
            return newMovie;
        });
        
    }



    return (
        <>
        <h2>Movie List:</h2>
        <ul>
            {movies.map( movie => <MovieListDetails key={movie.id} title={movie.title} year={movie.year} />)}
        </ul>
        <button onClick={addButtonHandler}>Add Movie</button>
        </>
    )
}