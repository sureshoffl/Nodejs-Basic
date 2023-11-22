const authService = require("../service/authService")


module.exports.login = async (req,res) => {
    try {
        const response = await authService.login(req.body)
        if(response.length != 0){
        return res.send({
            status: true,
            message: "success"
        })
      }
    } catch (error) {
        console.log("error",error)
    }
    return res.send({
        status: false , 
        message: "Invalid credentials"
    })
    
}

// app.post('/login',async (req, res)=>{
//     const { uname,email, pwd } = req.body;
    
//     if (uname && pwd)  {
//       await conn.query("SELECT * FROM login where uname = ? and email = ? and pwd = ?",[uname,email,pwd],function(error,results,fields){
//         if(results.length > 0 ) {
//             req.session.loggedin = true;
//             req.session.uname = uname;
//             res.redirect('/welcome');
//         }
//         else {
//             res.send('Invalid Credentials')
//         }
//         res.end();
//     });
//     }
//     });