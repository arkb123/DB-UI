import React, {useState} from 'react'
import "./Report.css"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Report() {
    const [input, setInput] = useState("");
    const reset = ()=>{
        document.getElementById("myTextarea").value = "Report Submitted!";
    }
    return (
        <div className="report-container">
            <div className="report-container-child">
                <h2>Submit new report</h2>
                <textarea id="myTextarea" onChange={event => setInput(event.target.value)} placeholder="enter report"></textarea>
                <Button onClick={reset} variant="contained" color="secondary">Submit</Button>
            </div>
            <Link to="/welcome"><Button className="report-backButton" variant="contained" color="primary">back</Button></Link> 
        </div>
    )
}

export default Report
