import React, { useState } from 'react';
import DanielMartinResume from "../Assets/DanielMartinResume.pdf";


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
                    <a onClick={handleClick} role="button" className={open ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false" href="#">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={open ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-end">
                        {/* <Link className="navbar-item link" to="/">Home</Link>
                        <Link className="navbar-item link" to="/About">About</Link> */}
                        <a className="navbar-item link" href={DanielMartinResume} target="__blank">Resume</a>
                        <a className="navbar-item link"href="mailto:danielmartin1205@gmail.com">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Nav;