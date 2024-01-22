const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../helper/auth.config");
const db = require("../helper/db");

module.exports = {
    signin,
    logOut,
};

async function signin(params) {
  var userData = {};
  const {email, password } = params;
  try{
    await db.Users.findOne({where: {email: email}}).then(async user =>{

        if(!user) 
        { 
          console.log("Sorry Account " + email + " not found !"); 

        } else {

            const isSame = bcrypt.compareSync(password, user.password);

            if (isSame) {
              var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours,
              }); 

            }  else {
            console.log("🌕🌕 Sorry password is incorrect ! 🌕🌕"); 
          }    
            //save token in db
            
            user.update({access_token: token});
            await user.save(); 
        }
        console.log('🔥🔥 Welcome ' + user.username + ' you are connected ! 🔥🔥');
        console.log(JSON.stringify({UserData : user}));
        console.log(JSON.stringify({access_token: token}));
        
        return userData = {
          id: user.id,
          username: user.username,
          role : user.role,
          email: user.email,
          access_token : token,
        }
        
      })

    } catch (err)
      {
          console.log(err.message);
      }
      return userData;

}

async function logOut(req,res){
  //logout user and delete token and redirect to home page
  const {id} = req.params;
  try{
    await db.Users.findOne({where: {id: id}}).then(async user =>{
      if(!user) 
      { 
        console.log("Sorry Account " + id + " not found !"); 
      } else {
        user.update({access_token: null});
        await user.save(); 
      }
      console.log('🌕🌕 You are disconnected ! 🌕🌕');
      res.redirect('/');
    })
  }
  catch (err)
    {
        console.log(err.message);
    }
}
