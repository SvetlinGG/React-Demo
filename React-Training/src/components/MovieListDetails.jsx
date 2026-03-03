

export default function MovieListDetails({
    id,
    title,
    year,
}){

    return (
        <>
        <li>{id}. {title} - {year}</li>
        </>
    )
}