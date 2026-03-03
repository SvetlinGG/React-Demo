import { useState } from "react"

export default function Counter(){


    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true)

    const countHandlerBtn = () => {
        setCount( count + 1);
    }
    if ( count > 10){
        return <p>The Counter is MAX</p>
    }
    const hideCounterHandler = () => {
        setShow(!show)
    }
    

    return (
        <>
        <h1>Counter</h1>
        <p>Count: {count}</p>

        { show
        ? (
            <div>
                <button onClick={countHandlerBtn}>Increment</button>
                <button onClick={hideCounterHandler}>Hide</button>
            </div>
        )
        :
        <p>Counter is Hidden</p>
    }
        

        
        </>
    )
}