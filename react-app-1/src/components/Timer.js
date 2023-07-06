import React, {useEffect, useState} from 'react';
const Timer = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue(prev => prev + 1)
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);
    return (
        <div>
            <h1>React 1 Timer</h1>
            <h2>Timer: {value}</h2>
        </div>
    )
}
export default Timer;