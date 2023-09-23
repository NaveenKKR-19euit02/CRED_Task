import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Admin() {
    const [datafetch, setDatafetch] = useState([])
    useEffect(() => {
        fetch("http://localhost:3003/getdata")
            .then(res => res.json())
            .then(data => setDatafetch(data))
    })

    const delt = (id) => {
        var key = { id: id }
        axios.post("http://localhost:3003/delete", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data are deleted")
                }
            })
    }


    return (
        <>
         
            <div className="container-fluid bg-dark vh-100 p-5">
            <h1 className='text-white'>Hello Boss!</h1>
                <h1>Service Requests</h1>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>serviceNeeded</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datafetch.map((request) => (
                            <tr key={request.id}>
                                <td>{request.name}</td>
                                <td>{request.mobileNo}</td>
                                <td>{request.serviceNeeded}</td>
                                <td>{request.date}</td>
                                <td>{request.description}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => { delt(request.id) }}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/updateform/${request.id}`}>
                                        <button className="btn btn-primary ml-2">
                                            Update Form
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}