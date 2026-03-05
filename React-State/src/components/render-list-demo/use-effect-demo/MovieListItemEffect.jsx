import { useEffect, useState } from "react"

export default function MovieListItemEffect({
    title,
     year,
    }){
        useEffect(() => {
            console.log('On mount');
            
        }, []);
        const [rating, setRating] = useState(0);

        const counterClickHandler = () => {
            setRating(rating + 1);
        }

    return (
        <>
        <li style={{fontWeight: 'bold', fontSize: '20px'}}>{title} - {year} - {rating}</li>
        <button onClick={counterClickHandler}>Rating +</button>
        </>
    )
}