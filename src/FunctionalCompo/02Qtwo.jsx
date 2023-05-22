import React from 'react';
import { useEffect,useState } from "react";

const Qtwo = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("The new counter value is ", counter);
    }, [counter]);

    return (
        <div>
            <h1>Counter</h1>
            <p>current value: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    );
};

export default Qtwo;