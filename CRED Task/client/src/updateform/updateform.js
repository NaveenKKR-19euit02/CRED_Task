
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Updateform() {
    var { id } = useParams()
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [serviceNeeded, setServiceNeeded] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        fetch("http://localhost:3003/getsingledata/"+id)
            .then(res => res.json())
            .then((output) => {
                setName(output[0].name)
                setMobileNo(output[0].mobileNo)
                setServiceNeeded(output[0].serviceNeeded)
                setDate(output[0].date)
                setDescription(output[0].description)

            })
    }, [])


    function handleSubmit(event) {
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
            alert("enter the service needed")
        }
        else if (date == '') {
            alert("enter the date")
        }
        else if (description == '') {
            alert("enter the description")
        }
        else {

            axios.put("http://localhost:3003/updateform/"+id,key)

                .then((res) => {
                    console.log(res);
                    if (res.data.status === "error") {
                        alert("data not updated")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data updated")
                        window.location.href = "/admin"
                    }
                })
        }
    }

    return (
        <>
            <div className=' container mt-5 login'>
                <div className="container mt-5">
                    <h2 className="mt-5">Update Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" value={name} onChange={(up) => setName(up.target.value)} className="form-control" id='name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number:</label>
                            <input type="text" value={mobileNo} onChange={(up) => setMobileNo(up.target.value)} className="form-control" id='mobileNo' />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">ServiceNeeded:</label>
                            <input type="text" value={serviceNeeded} onChange={(up) => setServiceNeeded(up.target.value)} className="form-control" id='serviceNeeded' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date:</label>
                            <input type="date" value={date} onChange={(up) => setDate(up.target.value)} className="form-control" id='date' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <input type="text" value={description} onChange={(up) => setDescription(up.target.value)} className="form-control" id='description' />
                        </div>
                        <button type="submit" className="btn btn-primary btn btn-large">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
}