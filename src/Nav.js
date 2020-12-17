import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar view</Link>
                </li>
                <li>
                    <Link to="/day">Day view</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav