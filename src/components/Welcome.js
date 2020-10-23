import React from 'react'
import "./Welcome.css"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome-container">
            <h2>Welcome Back!</h2>
            <div className="welcome-child">
                <Link to="./queries"><Button className="child-child">Write Queries</Button></Link>
                <Link to="./data-entry"><Button className="child-child">Data Entry</Button></Link>
                <Link to="./report"><Button className="child-child">Report New Changes</Button></Link>
                <Link to="./admin-list"><Button className="child-child">Admin List</Button></Link>
                <Link to="./help"> <Button className="child-child">Help</Button></Link> 
            </div>
        </div>
    )
}

export default Welcome
