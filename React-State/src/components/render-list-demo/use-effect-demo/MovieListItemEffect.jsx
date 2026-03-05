import { useEffect } from "react"

export default function MovieListItemEffect({
    title,
     year,
    }){
        useEffect(() => {
            console.log('Render');
            
        })

    return (
        <>
        <li style={{fontWeight: 'bold', fontSize: '20px'}}>{title} - {year}</li>
        </>
    )
}