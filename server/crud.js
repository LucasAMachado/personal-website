const db = require('./database');

// PROJECT operations
const createProject = (title, description, imagePath, callback) => {
    const sql = `INSERT INTO PROJECT (title, description, image_path) VALUES (?, ?, ?)`;
    db.run(sql, [title, description, imagePath], function (err) {
        callback(err, { id: this.lastID });
    });
};

const readProjects = (callback) => {
    const sql = `SELECT * FROM PROJECT`;
    db.all(sql, [], callback);
};

const updateProject = (id, title, description, imagePath, callback) => {
    const sql = `UPDATE PROJECT SET title = ?, description = ?, image_path = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [title, description, imagePath, id], callback);
};

const deleteProject = (id, callback) => {
    const sql = `DELETE FROM PROJECT WHERE id = ?`;
    db.run(sql, id, callback);
};

// BLOG_POST operations
const createBlogPost = (title, body, callback) => {
    const sql = `INSERT INTO BLOG_POST (title, body) VALUES (?, ?)`;
    db.run(sql, [title, body], function (err) {
        callback(err, { id: this.lastID });
    });
};

const readBlogPosts = (callback) => {
    const sql = `SELECT * FROM BLOG_POST`;
    db.all(sql, [], callback);
};

const updateBlogPost = (id, title, body, callback) => {
    const sql = `UPDATE BLOG_POST SET title = ?, body = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [title, body, id], callback);
};

const deleteBlogPost = (id, callback) => {
    const sql = `DELETE FROM BLOG_POST WHERE id = ?`;
    db.run(sql, id, callback);
};

// RESUME operations
const uploadResume = (filePath, callback) => {
    const sql = `INSERT INTO RESUME (file_path) VALUES (?)`;
    db.run(sql, [filePath], function (err) {
        callback(err, { id: this.lastID });
    });
};

const getResume = (callback) => {
    const sql = `SELECT * FROM RESUME ORDER BY uploaded_at DESC LIMIT 1`;
    db.get(sql, [], callback);
};

const updateResume = (id, filePath, callback) => {
    const sql = `UPDATE RESUME SET file_path = ?, uploaded_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [filePath, id], callback);
};

// NOTE operations
const createNote = (title, pdfPath, className, callback) => {
    const sql = `INSERT INTO NOTE (title, pdf_path, class_name) VALUES (?, ?, ?)`;
    db.run(sql, [title, pdfPath, className], function (err) {
        callback(err, { id: this.lastID });
    });
};

const readNotes = (callback) => {
    const sql = `SELECT * FROM NOTE`;
    db.all(sql, [], callback);
};

const updateNote = (id, title, pdfPath, className, callback) => {
    const sql = `UPDATE NOTE SET title = ?, pdf_path = ?, class_name = ? WHERE id = ?`;
    db.run(sql, [title, pdfPath, className, id], callback);
};

const deleteNote = (id, callback) => {
    const sql = `DELETE FROM NOTE WHERE id = ?`;
    db.run(sql, id, callback);
};

module.exports = {
    createProject, readProjects, updateProject, deleteProject,
    createBlogPost, readBlogPosts, updateBlogPost, deleteBlogPost,
    uploadResume, getResume, updateResume,
    createNote, readNotes, updateNote, deleteNote
};