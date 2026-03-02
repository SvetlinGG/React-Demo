import { useState } from "react"

export default function AdvancedCounter(){

    const [ counter, setCounter ] = useState(0)
    const [show, setShow] = useState(true);

    const buttonClickHandler = () => {
        setCounter(counter + 1)
    }

    const hideCounterHandler = () => {
        setShow(!show)
    };

    if ( counter > 10){
        return (
            <>
            <h2>Sorry it's more then ten</h2>
            <button onClick={() => setCounter(0)}>Reset</button>
            </>
        )
    }

    return (
        <>
        <h2>Advanced Counter</h2>
        <p>Counter: {counter}</p>

        { show 
            ? (
                <div>
                    <button onClick={buttonClickHandler}>Increment</button>

                    <button onClick={hideCounterHandler}>{show ? 'Hide' : 'Show'} Counter</button>
                </div>
                
            )
            : <p>Counter is Hidden</p>
        }
        

        
        </>
    )
}