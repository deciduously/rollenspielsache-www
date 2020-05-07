import React, { useState } from 'react';
import { useForm } from '../customHooks';

function Roller() {
    // TODO WRAP THIS ALL UP SOMEWHERE ELSE
    const endpoint = 'http://localhost:4567/roll/';
    const buttonClicked = () => {
        console.log(`Rolling ${input}...`)
        fetch(endpoint + input)
            .then(response => response.json())
            .then(data => setResults(results.concat(data.result)))
    }
    const { input, handleInputChange, handleSubmit } = useForm(buttonClicked);
    const [results, setResults] = useState([]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Roll:
                <input onChange={handleInputChange} type="text" value={input} />
                </label>
                <button type="submit">Roll!</button>
            </form>
            <ul>
                {results.map(r => <li>{r}</li>)}
            </ul>
        </div>
    )
}

export default Roller;