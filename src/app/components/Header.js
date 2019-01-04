import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import M from 'materialize-css'

import MainMenu from './MainMenu'

const Header = () => {
    useEffect(() => {
        const elem = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elem, null)
    })

    return (
        <header>
            <nav className="blue darken-2">
                <div className="container">
                    <span
                        data-target="mobile-demo"
                        className="sidenav-trigger right hide-on-large-only"
                    >
                        <i className="material-icons">menu</i>
                    </span>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo left">
                            BIT Blog
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <MainMenu />
                        </ul>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <MainMenu />
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
