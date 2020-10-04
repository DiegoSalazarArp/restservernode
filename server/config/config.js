//Puerto

process.env.PORT = process.env.PORT || 3000;


//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//DB

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Cafe'
} else {
    urlDB = 'mongodb+srv://desdev:gottisttott1@cluster0.z43s4.mongodb.net/cafe'
}

process.env.URLDB = urlDB;