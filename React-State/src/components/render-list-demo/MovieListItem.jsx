
export default function MovieListItem({
    title,
     year,
    }){

    return (
        <>
        <li style={{fontWeight: 'bold', fontSize: '20px'}}>{title} - {year}</li>
        </>
    )
}