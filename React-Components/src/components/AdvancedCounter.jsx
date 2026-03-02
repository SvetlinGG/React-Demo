import { useState } from "react"

export default function AdvancedCounter(){

    const [ counter, setCounter ] = useState(0)
    const [show, setShow] = useState(true);

    const buttonClickHandler = () => {
        setCounter(counter + 1)
    }

    const hideCounterHandler = () => {
        setShow(!show)
    }

    return (
        <>
        <h2>Advanced Counter</h2>
        <p>Counter: {counter}</p>

        <button onClick={buttonClickHandler}>Increment</button>

        <button onClick={hideCounterHandler}>Hide Counter</button>
        </>
    )
}