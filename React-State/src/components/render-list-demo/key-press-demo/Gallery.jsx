
export default function Gallery(){

    const onKeyDownHandler = (e) => {
        console.log(e.key);
        console.log('Key Down');
        
        
    }

    return (
        <>
        <h2>Gallery Demo (key press)</h2>
        <div style={{backgroundColor: 'lightblue'}}>
            <h3>Gallery View</h3>
            <img style={{width:200}} src="https://img.freepik.com/premium-photo/illustration-cute-boy-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4578.jpg?w=2000" alt="" />
        </div>
        </>
    )
}