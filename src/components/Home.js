import React from 'react'
import './Home.css'
import SignIn from './Signin'
import SignUp from './Create-account'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import StorageIcon from '@material-ui/icons/Storage';

function Home() {
    return (
        <div>
            <div className="home_container">
                <div className="home-box1">
                    <div className="mini-box">
                        <h2>Manage Database</h2>
                        <p>Simple and easy to use User Interface to manage your database. Log-in with your admin credentials. If you are new, click on create a account.</p>
                        <div className="mini-box-child">
                            <div className="box">
                                <h3>Log-in</h3>
                                <VpnKeyOutlinedIcon className="box-logo"/>
                            </div>
                            <div className="box">
                                <h3>Connect</h3>
                                <RssFeedIcon className="box-logo"/>
                            </div>
                            <div className="box">
                                <h3>Start managing</h3>
                                <StorageIcon className="box-logo"/>
                            </div>
                        </div>
                        <div className="mini-box-child-2">
                            <Link to="/create-account"> <Button variant="contained" color="primary" className="Home-button">Register</Button> </Link>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="home-box2">
                    <SignIn/>
                </div>
            </div>
        </div>
    )
}

export default Home
