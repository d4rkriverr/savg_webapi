const mysql = require('mysql2');

// Create a connection to the database

const StartDbConnection = () => {

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root', // Your MySQL username
        password: '', // Your MySQL password
        database: 'savg' // The name of your database
    });

    // Connect to MySQL
    conn.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database!');
    });
    return conn;
}

module.exports = StartDbConnection;