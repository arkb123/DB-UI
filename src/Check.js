import React, { useState} from "react";
import axios from "axios";

function Check() {

    const [code, setCode] = useState(null);

    let displayCode = (e) => {
    let x = e.target.value;
    if(isNaN(x)){
        alert("must input number");
        return;
    }
    console.log(e.target.value);
    setCode(e.target.value);
    };
   // const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    

    let getDataFromSql = async()=>{

        await axios.get(`/getData/${code}`).then(function (response) {
            // handle success
            const name = response.data[0].teamName;
            console.log(response.data);
           // setUser(name);
            setShow(true);
            setMessage(`${name} is in our database!`)
        }).catch(err =>{
            setMessage("does not exist");
            setShow(true);
        });
    }


    return (
        <div>
            <h1>Check for your school!</h1>
            <input typeof="number" minLength ="1" type="text" placeholder="enter code" onChange={displayCode} />
            <button  onClick={getDataFromSql}>check</button>
            {show ? <h3>{message}</h3> : null}
        </div>
    )
}

export default Check
