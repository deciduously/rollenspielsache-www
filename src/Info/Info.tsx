import React from 'react';

function Info() {
    let listEntry = (name: string, description: string, url?: string) => {
        const name_fragment = url ?
            <a href={url} target="_blank" rel="noopener noreferrer">
                <code>{name}</code>
            </a>
            : <code>{name}</code>
        return (
            <li>{name_fragment} - {description}</li>
        )
    }
    return (
        <div>
            <p>The Rollenspielsache is a set of module tools for managing tabletop RPG sessions.</p>
            <p>Components:</p>
            <ul>
                {listEntry('librollenspielsache',
                    'Rust crate with C-compatible API with core types and logic',
                    'https://github.com/deciduously/librollenspielsache'
                )}
                {listEntry('librollenspielsache-rb',
                    'Ruby wrapper gem',
                    'https://github.com/deciduously/librollenspielsache-rb'
                )}
                {listEntry('rollenspielsache_svc',
                    'Backend web service',
                    'https://github.com/deciduously/rollenspielsache_svc'
                )}
                {listEntry('rollenspielsache-www',
                    'React frontend - this website!',
                    'https://github.com/deciduously/rollenspielsache-www'
                )}
                {listEntry('rollenspielsache-py',
                    'Python bindings (Planned)'
                )}
                {listEntry('rollenspielsache-bot',
                    'Discord bot (Planned)'
                )}
                {listEntry('rollenspielsache-ts',
                    'JS/TS bindings (Node) (Planned)'
                )}
                {listEntry('rollenspielsache-roll20',
                    'Roll20 integration (Planned)'
                )}
            </ul>
        </div>
    )
}

export default Info;