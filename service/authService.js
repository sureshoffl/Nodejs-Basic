const db = require("../config")

module.exports.login = async (props) => {
    const {uname, pwd , email} = props
    try {
      const response = await db.raw("SELECT * FROM login where uname = ? and email = ? and pwd = ?",[uname,email,pwd])
                        //    db('login').select('uname','email','pwd').where({uname, pwd , email})

      

      return response[0]  
    } catch (error) {
        console.log("error",error)
    }
    return null
}