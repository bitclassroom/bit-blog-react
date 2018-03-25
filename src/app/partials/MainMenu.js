import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <ul className="right">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/authors">Authors</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
}

export default MainMenu
