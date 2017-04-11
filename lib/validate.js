const bcrypt = require("bcrypt");
const users = require("../database/users.js");

console.log(users);
function basicValidate(request, username, password, callback){
  console.log(username);
  console.log(users[username]);
  if(users[username]){
    bcrypt.compare(password, users[username].password, (err, isValid) => {
      if (err) throw err;
      callback(err, isValid, {username, id: users[username].id, scope: users[username].permissions});
    } );
  } else {
    callback(null, false);
  }
}

module.exports = basicValidate;
