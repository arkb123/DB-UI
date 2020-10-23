    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import InputBase from '@material-ui/core/InputBase';
    import Divider from '@material-ui/core/Divider';
    import IconButton from '@material-ui/core/IconButton';
    import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
    import FindReplaceIcon from '@material-ui/icons/FindReplace';
    import CodeIcon from '@material-ui/icons/Code';
    import Button from '@material-ui/core/Button';
    import { Link } from "react-router-dom";
    import './Queries.css'
    import axios from "axios";
    import { useState} from "react";
    
    

    const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    }));

    export default function CustomizedInputBase() {
    const [code, setCode] = useState("");


    let displayCode = (e) => {
    // console.log(e.target.value);
    setCode(e.target.value);
    };
   // const [user, setUser] = useState();
    const [myData, setData] = useState([]);

    function test (){
        myData.map(team =>{
            console.log(team.teamName);
        })
    }

    const listItem = myData.map(team =>{
            return(
            <div className="data-output">
                <div className="child-data-output">
                    <li>{team.teamName}</li>
                </div>
                <div className="child-data-output">
                    <li>{team.idteam}</li>
                </div>
                <div className="child-data-output">
                    <li>{team.conferenceCode}</li>
                </div>
                
                
                {/* <li>{team.conferenceCode}</li> */}
            </div>
            )
        })

    let getDataFromSql = async()=>{

        await axios.get(`getInfo/${code}`).then(function (response) {
            // handle success
            const name = response.data[0].teamName;
            const data = response.data;
            console.log(data);
            setData(data);
        
        }).catch(err =>{
            console.log(err)
        });
    }

    const classes = useStyles();

    return (
        <div className="main-que-container">
            <div className="Que-search-container">
                <Paper component="form" className={classes.root}>
            <IconButton onClick={test} className={classes.iconButton} aria-label="menu">
                <DoubleArrowIcon />
            </IconButton>
            <InputBase
                onChange={displayCode}
                className={classes.input}
                placeholder="Write SQL Query. ex: 'SELECT * FROM team' "
                inputProps={{ 'aria-label': 'Write sql query' }}
            />
            <IconButton onClick={getDataFromSql} className={classes.iconButton} aria-label="search">
                <FindReplaceIcon id="search-icon"/>
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <CodeIcon />
            </IconButton>
            </Paper>
            </div>
            <div className="Que-data-out">
                <h2>Data: </h2>
                <ul>
                <div className="data-output">
                    <div className="child-data-output" id="main-data-output-child">
                        <li> <strong>team-name:</strong> </li>
                    </div>
                    <div className="child-data-output" id="main-data-output-child">
                        <li><strong>team-id:</strong></li>
                    </div>
                    <div className="child-data-output" id="main-data-output-child">
                        <li><strong>conference-id:</strong></li>
                    </div>
                    {/* <li><strong>confrence code:</strong></li> */}
                </div>
                {listItem}
                </ul>
            </div>
            <Link to="/welcome"><Button className="que-backButton" variant="contained" color="primary">back</Button></Link>
        </div>
    );
    }