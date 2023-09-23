const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")

const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(bodyparser.urlencoded({ extended: true }))

let databaseconnection = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5999",
    database: "bikeservice"
})
databaseconnection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database is connected")
    }
})
connect.post('/register', (request, response) => {
    let { firstname, lastname, MobileNo, email, city, state, password } = request.body
    let sql = 'insert into newusers (firstname,lastname,MobileNo,email,city,state,username,password)values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [firstname, lastname, MobileNo, email, city, state, email, password], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.post('/login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from newusers where username=?'
    databaseconnection.query(sql, [username], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let dbusername = result[0].username
            let dbpassword = result[0].password
            let id = result[0].id

            if (dbusername === username && dbpassword === password) {
                response.send({ "status": "success", "id": id })
            }
            else {
                response.send({ "status": "invalid_user" })
            }
        }
        else {
            response.send({ "status": "error" })
        }
    })
})

connect.post('/form', (request, response) => {
    let {name,mobileNo,serviceNeeded,date,description } = request.body
    let sql ='insert into booking (name,mobileNo,serviceNeeded,date,description)values(?,?,?,?,?)'
    databaseconnection.query(sql,[name,mobileNo,serviceNeeded,date,description], (error,result) => {
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else {
            response.send({"status":"success"})
        }
    })
})
connect.get("/getdata", (request, response) => {
    let sql = 'select * from booking'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})


connect.post('/delete', (request, response) => {
    let empno = request.body.id
    let sql = 'delete from booking where id=?'
    databaseconnection.query(sql, [empno], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.put('/updateform/:id',(request,response)=>{
    
    let {id}=request.params
    let {name,mobileNo,serviceNeeded,date,description}=request.body
    let sql ='update booking set name=?,mobileNo=?,serviceNeeded=?,date=?,description=? where id=?' 
    databaseconnection.query(sql,[name,mobileNo,serviceNeeded,date,description,id],(error,result)=>{
        if(error) {
            response.send({"status":"error"})
            
        }
        else {
            response.send({"status":"success","id":id})
        }  
    })

})



connect.get("/getsingledata/:id", (request, response) => {
    let {id} = request.params
    let sql = 'select * from booking where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
            console.log("success")
        }
    })
})

connect.get("/getname/:id", (request,response) => {
    let {id} = request.params
    let sql = 'select * from newusers where id=?'
    databaseconnection.query(sql,[id],(error,result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
         
        }
    })
})


connect.listen(3003, () => {
    console.log("your server is running in port 3003")
})
