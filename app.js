import bodyParser from 'body-parser';
import express from 'express';
// import bcrypt from 'bcrypt';
import mysql from 'mysql';


 const app = express();

 app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}))

 app.post('/login', (req,res) =>{
   const correo = req.body.correo;
   const password = req.body.password;
   const contrasena = bscrypt.hash(password,10);
   const respuesta = conexion.query('select * from usuarios where correo = ?', [correo])
    console.log(req.body);
    
    return res.json({message: 'Hola mundo'});
 });

 app.post('/registro',async (req, res) => {
 const nombre = req.body.nombre;
 const correo = req.body.correo;
 const contrasena = await bscrypt.hash(password,10);
 const respuesta = conexion.query('insert into usuarios (nombre, correo, constrasena) values (?,?,?), [nombre, correo, constrasena]|')
 return  res.json({"registro" : true});
 })

//  datos base de base de datos
 app.listen(3000);
 const conexion = mysql.createConnection({
  host: "localhost",
  user: "Daniel_Martinez",
  password: "ADSO",
  database: "Daniel Martinez"
 })