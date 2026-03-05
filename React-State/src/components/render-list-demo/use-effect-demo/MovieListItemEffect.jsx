
export default function MovieListItemEffect({
    title,
     year,
    }){

    return (
        <>
        <li style={{fontWeight: 'bold', fontSize: '20px'}}>{title} - {year}</li>
        </>
    )
}