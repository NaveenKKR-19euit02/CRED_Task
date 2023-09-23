import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './form.css'

export function Form() {
    function login(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        var key = {
            username: username,
            password: password,

        }
        if (username == '') {
            alert("plz enter the username")
        }
        else if (password == '') {
            alert("plz enter the password")
        }
        else if (username == 'admin@gmail.com') {
            axios.post("http://localhost:3003/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("plz enter the username or register a new one")
                    }
                    else if (res.data.status === "success") {
                        // var id = res.data.id
                        alert("successfull Loged in")
                        window.location.href = '/admin'
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("plz check your password")
                    }
                    else if (res.data.status === "error") {
                        alert("all the data are invalid")
                    }
                    else {
                        alert("plz register your details first")
                    }
                })

        }
        else {
            axios.post("http://localhost:3003/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("plz enter the username or register a new one")
                    }
                    else if (res.data.status === "success") {
                        // var id = res.data.id
                        alert("successfull Loged in")
                        window.location.href = '/dashboard'
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("plz check your password")
                    }
                    else if (res.data.status === "error") {
                        alert("all the data are invalid")
                    }
                    else {
                        alert("plz register your details first")
                    }
                })
        }
    }
    return (
        <>
        <div className="container-fluid d-flex align-items-center vh-100  back">
            <div class="container log">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card mt-5">
                           <h1 className="text-center">LOGIN</h1>
                            <div class="card-body">
                                <form onSubmit={login}>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Username" id="username" required />
                                    </div><br/>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password" id="password" required />
                                    </div>
                                    <br/>
                                    <button type="submit" class="btn btn-dark btn-block">Login</button>
                                    <hr />
                                    <div>
                                        <Link to="/register">
                                            <button type="button" className="btn btn-light text-dark btn-block ">Register</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
}


