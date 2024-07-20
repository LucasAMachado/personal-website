const bcrypt = require('bcryptjs');

const password = '1234'; // This should be the plain text password
bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;
    console.log(`Hashed Password: ${hashedPassword}`);
});
