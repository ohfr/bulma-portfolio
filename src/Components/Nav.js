import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    const [open,setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className="container nav">
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <h1 className="navbar-item">Daniel Martin</h1>
                    <a onClick={handleClick} role="button" className={open ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={open ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-end">
                        {/* <Link className="navbar-item link" to="/">Home</Link>
                        <Link className="navbar-item link" to="/About">About</Link> */}
                        <a className="navbar-item link" href="https://docs.google.com/document/d/1qUfIOe7l0zUtmvlZt4e4P0Titj1E61VXMtQCq8gbNd4/edit?usp=sharing" target="_blank">Resume</a>
                        <a className="navbar-item link"href="mailto:danielmartin1205@gmail.com">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Nav;