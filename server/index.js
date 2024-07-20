const express = require('express');
const { authenticateToken } = require('./auth'); // Import the authentication middleware
const authRoutes = require('./authRoutes'); // Import authentication routes
const {
    createProject, readProjects, updateProject, deleteProject,
    createBlogPost, readBlogPosts, updateBlogPost, deleteBlogPost,
    uploadResume, getResume, updateResume,
    createNote, readNotes, updateNote, deleteNote
} = require('./crud');

const app = express();
app.use(express.json());

// Authentication routes
app.use('/auth', authRoutes);

// PROJECT routes
app.get('/projects', (req, res) => {
    readProjects((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/projects', authenticateToken, (req, res) => {
    const { title, description, imagePath } = req.body;
    createProject(title, description, imagePath, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Project added with ID: ${data.id}`);
        }
    });
});

app.put('/projects/:id', authenticateToken, (req, res) => {
    const { title, description, imagePath } = req.body;
    updateProject(req.params.id, title, description, imagePath, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Project updated");
        }
    });
});

app.delete('/projects/:id', authenticateToken, (req, res) => {
    deleteProject(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Project deleted");
        }
    });
});

// BLOG_POST routes
app.get('/blog-posts', (req, res) => {
    readBlogPosts((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/blog-posts', authenticateToken, (req, res) => {
    const { title, body } = req.body;
    createBlogPost(title, body, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Blog post added with ID: ${data.id}`);
        }
    });
});

app.put('/blog-posts/:id', authenticateToken, (req, res) => {
    const { title, body } = req.body;
    updateBlogPost(req.params.id, title, body, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Blog post updated");
        }
    });
});

app.delete('/blog-posts/:id', authenticateToken, (req, res) => {
    deleteBlogPost(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Blog post deleted");
        }
    });
});

// RESUME routes
app.get('/resume', (req, res) => {
    getResume((err, row) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(row);
        }
    });
});

app.post('/resume', authenticateToken, (req, res) => {
    const { filePath } = req.body;
    uploadResume(filePath, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Resume uploaded with ID: ${data.id}`);
        }
    });
});

app.put('/resume/:id', authenticateToken, (req, res) => {
    const { filePath } = req.body;
    updateResume(req.params.id, filePath, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Resume updated");
        }
    });
});

// NOTE routes
app.get('/notes', (req, res) => {
    readNotes((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/notes', authenticateToken, (req, res) => {
    const { title, pdfPath, className } = req.body;
    createNote(title, pdfPath, className, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send(`Note added with ID: ${data.id}`);
        }
    });
});

app.put('/notes/:id', authenticateToken, (req, res) => {
    const { title, pdfPath, className } = req.body;
    updateNote(req.params.id, title, pdfPath, className, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Note updated");
        }
    });
});

app.delete('/notes/:id', authenticateToken, (req, res) => {
    deleteNote(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send("Note deleted");
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
