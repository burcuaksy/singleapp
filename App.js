import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Navbar title="User App " />
                <hr />
                <User
                    name="Burcu Aksoy"
                    salary="10000"
                    department=" Bilişim"

                />
                <User
                    name="Ahmet Polat"
                    salary="8000"
                    department="Bilişim"

                />


            </div>
        );
    }
}
export default App;
