// Create hash for string 'password'
/*Bcrypt.hash('password', null, null, function (err, hash) {
  console.log(err, hash);
});*/


// The unhashed password = 'password'
var users = {
  jsms90: {
    username: 'jsms90',
    password: '$2a$10$XPk.7lupEzBSHxUg/IavSuIKmwmpBbW0NfCL8q0ZfHXUPXTtbhmNK',   // 'password'
    name: 'Jennifer Spencer',
    id: '1234abcd'
  }
};

module.exports = users;
