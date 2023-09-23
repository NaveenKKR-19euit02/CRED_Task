import React, { useState, useEffect } from "react";
import axios from "axios";
import './dashboard.css'
import { useParams } from "react-router-dom";


export function Dashboard() {
    function handlelogin(event) {
        event.preventDefault()
        var name = document.getElementById("name").value
        var mobileNo = document.getElementById("mobileNo").value
        var serviceNeeded = document.getElementById("serviceNeeded").value
        var date = document.getElementById("date").value
        var description = document.getElementById("description").value

        var key = {
            name: name,
            mobileNo: mobileNo,
            serviceNeeded: serviceNeeded,
            date: date,
            description: description
        }
        console.log(key);
        if (name == '') {
            alert("enter the name")
        }

        else if (mobileNo == '') {
            alert("enter the Number")
        }
        else if (serviceNeeded == '') {
            alert("enter the needed service")
        }
        else if (date == '') {
            alert("enter the date")
        }
        else if (description == '') {
            alert("enter the description")
        }

        else {
            axios.post("http://localhost:3003/form", key)
                .then((res) => {
                    console.log(res);
                    if (res.data.status === "error") {
                        alert("data not inserted")
                        // window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data inserted")
                        // window.location.href = '/userlogin'
                    }
                })
        }
    }

    return (
        <><div></div>
        <div className="container-fluid p-5 bg-secondary" id="dashboard">
            <div className=' container  booking'>
                <div className="container mt-5">
                    <h2 className="mt-5">Booking </h2>
                    <form onSubmit={handlelogin}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" id='name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number:</label>
                            <input type="text" className="form-control" id='mobileNo' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service Needed:</label>
                            <input type="text" className="form-control" id='serviceNeeded' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date:</label>
                            <input type="date" className="form-control" id='date' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <input type="text" className="form-control" id='description' />
                        </div>

                        <button type="submit" className="btn btn-dark btn btn-large">Submit</button>
                    </form>
                </div>
            </div>
            </div>

        </>
    );
}

