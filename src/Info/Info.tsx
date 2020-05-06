import React from 'react';

function Info() {
    return (
        <div>
            <p>The Rollenspielsache is a set of module tools for managing tabletop RPG sessions.</p>
            <p>Components:</p>
            <ul>
                <li>
                    <a href="https://github.com/deciduously/librollenspielsache" target="_blank" rel="noopener noreferrer">
                        <code>librollenspielsache</code>
                    </a> - Rust crate with C-compatible API with core types and logic.
                </li>
                <li>
                    <a href="https://github.com/deciduously/librollenspielsache-rb" target="_blank" rel="noopener noreferrer">
                        <code>librollenspielsache-rb</code>
                    </a> - Ruby gem wrapping <code>librollenspielsache</code>.
                </li>
                <li>
                    <a href="https://github.com/deciduously/rollenspielsache_svc" target="_blank" rel="noopener noreferrer">
                        <code>rollenspielsache_svc</code>
                    </a> - Backend web service exposing <code>librollenspielsache</code> functionality.
                </li>
                <li>
                    <a href="https://github.com/deciduously/rollenspielsache-www" target="_blank" rel="noopener noreferrer">
                        <code>rollenspielsache-www</code>
                    </a> - React interface for <code>rollenspielsache_svc</code>.  That's this website!
                </li>
            </ul>
            <p>Planned:</p>
            <li>
                <code>rollenspielsache-py</code> - Python library wrapping <code>librollenspielsache</code> functionality.
            </li>
            <li>
                <code>rollenspielsache-bot</code> - Discord bot exposing <code>librollenspielsache</code> functionality.
            </li>
            <li>
                <code>rollenspielsache-ts</code> - JS/TS library wrapping <code>librollenspielsache</code> functionality.
            </li>
            <li>
                <code>rollenspielsache-roll20</code> - JavaScript roll20 API integration for  <code>librollenspielsache</code> functionality.
            </li>
        </div>
    )
}

export default Info;