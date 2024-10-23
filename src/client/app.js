import React, {useState} from "react";

export const App = () => {
    const [counter, setCounter] = useState(0)

    return <div>
        <h1>Hello world SSR</h1>
        <p>{counter}</p>
        <button type='button' onClick={() => setCounter(counter + 1)}>+</button>
    </div>;
}
