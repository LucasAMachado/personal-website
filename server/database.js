const sqlite3 = require('sqlite3').verbose();
const dbName = 'portfolio.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to portfolio database');

        // Create PROJECT table
        db.run(`CREATE TABLE IF NOT EXISTS PROJECT (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            image_path TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("PROJECT table created or already exists");
            }
        });

        // Create BLOG_POST table
        db.run(`CREATE TABLE IF NOT EXISTS BLOG_POST (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("BLOG_POST table created or already exists");
            }
        });

        // Create RESUME table
        db.run(`CREATE TABLE IF NOT EXISTS RESUME (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            file_path TEXT NOT NULL,
            uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("RESUME table created or already exists");
            }
        });

        // Create NOTE table
        db.run(`CREATE TABLE IF NOT EXISTS NOTE (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            pdf_path TEXT NOT NULL,
            class_name TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("NOTE table created or already exists");
            }
        });

    }
});

module.exports = db;