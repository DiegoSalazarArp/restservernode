//Puerto

process.env.PORT = process.env.PORT || 3000;


//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del token
//60 seg
//60 min


process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//SEED de autenticación

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//DB

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//google client id

process.env.CLIENT_ID = process.env.CLIENT_ID || '637046874561-4kvfl4irfe8o5aaeplsbgkg72hjcb8k1.apps.googleusercontent.com';