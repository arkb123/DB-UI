import React,{ useState, useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header"
import About from "./About"
import Landing from "./Landing"
import './App.css';
import Check from './Check';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import SignUp from './components/Create-account';
import Home from './components/Home';
import Footer from './components/Footer'
import Welcome from './components/Welcome';
import Report from './components/Report';
import DataEntry from './components/DataEntry';
import AdminList from './components/AdminList';
import CustomizedInputBase from './components/Quries';


function App() {

  const [code, setCode] = useState(null);

  let displayCode = (e)=>{
    console.log(e.target.value);
    setCode(e.target.value)
  }
  let displayName = ()=>{
    console.log(code);
  }
  return (
    <Router>
      <Switch>
        <Route path="/queries">
          <Navbar/>
          <CustomizedInputBase/>
        </Route>
        <Route path="/admin-list">
          <Navbar/>
          <AdminList/>
        </Route>
        <Route path="/data-entry">
          <Navbar/>
          <DataEntry/>
        </Route>
        <Route path="/report">
          <Navbar/>
          <Report/>
          <Footer/>
        </Route>
        <Route path="/welcome">
          <Navbar/>
          <Welcome/>
          <Footer/>
        </Route>
        <Route path="/login">
          <Navbar/>
          <Signin/>
        </Route>
        <Route path="/create-account">
          <Navbar/>
          <SignUp/>
          <Footer/>
        </Route>
        <Route path="/" exact>
          <Navbar/>
          <Home/>
          {/* <Landing />
          <Check /> */}
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
