import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Header({id}) {
    // let getData = () =>{
    //     axios.get("/getData").then(function (response) {
    //       // handle success
    //     console.log(response.data);
    //     });
    // }
    const [user, setUser] = useState();

    let updateUser = (user)=> {
        setUser(user);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        axios.get(`/getData/${id}`).then(function (response) {
            // handle success
            console.log(response.data);
            updateUser(response.data[0].teamName)
        }).catch(err =>{
            console.log(`Team with id ${id} doesnt exist`)
            setUser("doest not exist :(")
        });
        
    }, []);

    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
};

export default Header
