import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css'

export function Register() {
    function handleRegister(event) {
        event.preventDefault()
        var firstname = document.getElementById("firstname").value
        var lastname = document.getElementById("lastname").value
        var MobileNo = document.getElementById("MobileNo").value
        var email = document.getElementById("email").value
        var city = document.getElementById("city").value
        var state = document.getElementById("state").value
        var password = document.getElementById("password").value

        var key = {
            firstname: firstname,
            lastname: lastname,
            MobileNo: MobileNo,
            email: email,
            city: city,
            state: state,
            password: password

        }
        if (firstname == '') {
            alert("enter the fname")
        }
        else if (lastname == '') {
            alert("enter the lname")
        }
        else if (MobileNo == '') {
            alert("enter the Number")
        }
        else if (email == '') {
            alert("enter the email")
        }
        else if (city == '') {
            alert("enter the city")
        }
        else if (state == '') {
            alert("enter the state")
        }
        else if (password == '') {
            alert("enter the password")
        }
        else {
            axios.post("http://localhost:3003/register", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data not inserted")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data inserted")
                        window.location.href = '/form'
                    }
                })
        }
    }
    return (
        <>
           <div className='container-fluid p-5 back vh-100'>
                <div className='container  login'>
                    <div className="container ">
                        <h2 className="mt-5 text-white">Registration Form</h2>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                           <br/>
                                <input type="text" className="form-control" placeholder='First Name' id='firstname' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="text" className="form-control"  placeholder='Last Name' id='lastname' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="text" className="form-control"  placeholder='Mobile no' id='MobileNo' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="email" className="form-control"  placeholder='E-Mail' id='email' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="text" className="form-control"   placeholder='City' id='city' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="text" className="form-control"  placeholder='State' id='state' />
                            </div>
                            <div className="mb-3">
                            <br/>
                                <input type="password" className="form-control"  placeholder='Password' id='password' />
                            </div>
                            <span className='d-flex '> <button type="submit" className="btn btn-dark btn btn-large">Submit</button>&nbsp;&nbsp;
                                <Link to="/form">
                                    <p className='text-white'>already a user!</p>
                                </Link></span>
                        </form>
                    </div>
                </div>
                </div>
          
        </>
    );
}