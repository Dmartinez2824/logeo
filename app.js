import bodyParser from 'body-parser';
import express from 'express';
import bcrypt from 'bcrypt.js';

 const app = express();

 app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}))

 app.post('/login', (req,res) =>{
   const email = req.body.email;
   const password = req.body.password;
   const contrasena = bcrypt.hash(password,10);
    console.log(req.body);
    
    return res.json({message: 'Hola mundo'});
 });

 app.listen(3000);