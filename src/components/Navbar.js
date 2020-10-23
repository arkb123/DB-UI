import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import CloudIcon from '@material-ui/icons/Cloud';
import { Button, ButtonGroup } from '@material-ui/core';

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="navbar_flex">
                    <div className="navbar_title">
                        <h1>CINS-370</h1>
                        <h2>Database UI</h2>
                    </div>
                    <CloudIcon className="navbar_cloud"/>
                </div>
                <div className="navbar_buttonGroup">
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Link to="/"><Button id="navbar-button">Home</Button></Link>
                        <Link to="/login"><Button id="navbar-button">Login</Button></Link>
                        <Link to="/about"><Button id="navbar-button">About</Button></Link>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Navbar
