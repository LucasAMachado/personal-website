const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secretKey } = require('./auth');

const router = express.Router();

// Dummy user, replace with real user data from your database
// Use the hashed password you get from hashing
const user = { username: 'admin', password: '$2a$10$R2NrBWfx/EtwiFUHXLys/O6qdHcGwG8W27FhfDcKzM0q55Q5/Fp92' }; // Replace with actual hashed password

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) return res.status(400).send('Invalid credentials');

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const accessToken = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ accessToken });
    });
});

module.exports = router;
