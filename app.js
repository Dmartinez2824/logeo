import express from 'express'
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import mysql from "mysql2/promise";
import jwt from 'jsonwebtoken';


const app = express()

const validarToken = (req, res, rev) => {
  try{

    console.log(req.headers.authorization);
    if(!autHeader || !autHeader.starWith()){

    }
    const authtoken = req.headers.authorization;
    if(true){
      res.json({message : 'Solicitud sin token'});
    }else{
      res.json({message : 'Solicitud si tiene token'});
    }
  }catch(e){

  }
  }
  const enviar = (e) =>{
    console.log('validado');
  }
  
  // Permite que la app acepte datos JSON
app.use(bodyParser.json());
app.use(express.json());

// Permite el envio de datos de tipo utlencode
app.use(express.urlencoded({ extended: true }));
app.post('/privada', async (req,res) => {

})

app.post('/login', async (req, res) => {
const email = req.body.email;
const password = req.body.contrasena;
  const [rows] = await conexion.query("SELECT * FROM usuarios WHERE correo = ?" , [email]);
  const esValido = bcrypt.compare(password, rows[0].contrasena)
    if (esValido) {
      console.log('Contraseña correcta. Usuario Autenticado');
      // contraseñas correctas
      const token = await generarToken();
      const tokenRefresh = await generarTokenRefresh();
      const bdTokenRefres = await conexion.query();
      // console.log({"Generado Token inicio: ":token});
      // console.log({"Generado Token Refresco: ": tokenRefresh});
      return res.json({
        mensaje : "Usuario Autenticado",
        token : token,
        tokenRefresh: tokenRefresh
      })
      
    } else {
      // contraseñas sin coincidir
      console.log('Contraseña incorrecta. Usuario no Autenticado');

      return res.json({
        mensaje : "Contraseña incorrecta. Usuario no Autenticado",
      })
    }
    
});


const generarToken = async () => {
  return jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });
}


const generarTokenRefresh = async () => {
  return jwt.sign({
    data: 'foobar'
  }, 'secretRefresh', { expiresIn: '3d' });
}

app.listen(3000);

app.post("/registro", async (req, res) => {
  console.log("Datos recibidos:", req.body);
  const nombre = req.body.nombre;
  const email = req.body.email;
    const password = await bcrypt.hash(req.body.contraseña,10);
    const [respuesta] = await conexion.query("insert into usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)", [nombre, email, password]);
    console.log(respuesta);
    console.log(nombre,email,password);
    return res.json({"registro": true}) 
})

//  datos base de base de datos
const conexion = await mysql.createConnection({
  host: "localhost",
  user: "Daniel_Martinez",
  password: "ADSO",
  database: "Daniel_Martinez"
});


