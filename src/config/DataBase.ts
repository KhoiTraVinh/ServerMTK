import mysql from 'mysql';

const db = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: parseInt(process.env.DBPORT)
});

db.connect(error =>{
    if(error){
        console.log(error)
    }else{
        console.log('Database connected')
    }
})

export { db }
