
export default function MovieListItem(props){
    console.log(props);
    

    return (
        <>
        <li style={{fontWeight: 'bold', fontSize: '20px'}}>{props.title} - {props.year}</li>
        </>
    )
}