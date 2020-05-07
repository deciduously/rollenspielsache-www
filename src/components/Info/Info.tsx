import React from 'react';
import { parts, RollenspielsacheComponent } from '../../lib/RollenspielsacheComponent'

function Info() {
    const listEntry = (c: RollenspielsacheComponent) => {
        const name_fragment = c.url ?
            <a href={c.url} target="_blank" rel="noopener noreferrer">
                <code>{c.name}</code>
            </a>
            : <code>{c.name}</code>
        return (
            <li key={c.name}>{name_fragment} - {c.description}</li>
        )
    }
    return (
        <div className="info">
            <p>The Rollenspielsache is a set of module tools for managing tabletop RPG sessions.</p>
            <p>Components:</p>
            <ul>
                {parts.map(listEntry)}
            </ul>
        </div>
    )
}

export default Info;