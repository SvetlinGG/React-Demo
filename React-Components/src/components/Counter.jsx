import { useState } from "react";

export default function Counter(){

    const [ counter, setCounter ] = useState(0)

    const buttonClickHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <>
        <h2>Counter: {counter}</h2>

    <button onClick={buttonClickHandler}>Increment</button>
        </>
    )
}