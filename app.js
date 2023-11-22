const http = require('http');
const { log } = require('console');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const { body, param } = require('express-validator');
const path = require('path');
const session = require('express-session');
const fs = require('fs');
const router = express.Router();
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.post('/login',async (req, res)=>{
// const { uname,email, pwd } = req.body;

// if (uname && pwd)  {
//   await conn.query("SELECT * FROM login where uname = ? and email = ? and pwd = ?",[uname,email,pwd],function(error,results,fields){
//     if(results.length > 0 ) {
//         req.session.loggedin = true;
//         req.session.uname = uname;
//         res.redirect('/welcome');
//     }
//     else {
//         res.send('Invalid Credentials')
//     }
//     res.end();
// });
// }
// });

// app.get('/welcome',function(req,res){
//     res.sendFile(__dirname + '/welcome.html');
// });

// app.post('/welcome',function(req,res){
//     res.sendFile(__dirname + '/welcome.html');
// });



// app.get('/product',(req,res) =>{
//     conn.query('SELECT * FROM product',(err,rows,fields)=>{
//         if(!err) {
//             res.send(rows);
//         }
//         else {
//             console.log(err);
//         }
//     });
// });



// app.delete('/product/:pid',(req,res)=>{
//     const { pid } = param;

//     conn.query('DELETE FROM product where pid= ?',[pid],(err,rows,fields)=>{
//         if(!err) {
//             res.send('Record Deleted Successfully');
//         }
//         else {
//             console.log(err);
//         }
//     });
// });




// app.post('/product',(req,res)=>{
   
// console.log(req.body);
//     const { pname, pid, pprice } = req.body;
    
//    conn.query('INSERT INTO product(pname,pid,pprice) VALUES(?,?,?)',[pname,pid,pprice],(err,rows,fields)=>{

//     if(!err) {
//         res.send('Record Inserted Successfully');
//     }
//     else {
//         console.log(err);
//     }
//    });
// });


// app.put('/product',(req,res)=>{

//     const { pname, pid } = req.body;
//     conn.query('UPDATE product SET pname = ?, pid = ?',[pname,pid],(err,rows,fields)=>{
//         if(!err) {
//             res.send('Updated Successfully');
//         }
//         else {
//             console.log(err);
//         }
//     });
// });

app.listen(7000, () => {
    return console.log("server is listening")
});
require("./apigateway/index")(app);