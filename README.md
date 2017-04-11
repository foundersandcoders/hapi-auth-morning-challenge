# hapi.js Authentication

Clone this repo & have a look at the files you already have.


1. Install `hapi-auth-basic` and add register this plugin on your server.

2. Inside `lib/validate.js`, write a function called `basicValidate`, which validates the password of the users in your "database" (`database/users.js`), using Bcrypt.  
Note: we are just using a JavaScript object for the purposes of this exercise

3. Replace [the comment in `server.js`](https://github.com/foundersandcoders/hapi-auth-morning-challenge/blob/master/src/server.js#L24) with an authentication **strategy** that uses `hapi-auth-basic`. Remember, always use the [hapi docs](https://hapijs.com/api) to find out how to use a new method, or what parameters a method takes :+1:.  
Hint 1: If the docs on the website / wiki aren't comprehensive enough, your next port of call is to go directly to the relevant github repo! For example: [the hapi framework](https://github.com/hapijs/hapi), [inert](https://github.com/hapijs/inert), [vision](https://github.com/hapijs/vision), etc.
Hint 2: `server.auth.strategy`

4. Add your new authorisation strategy to all your routes.  
Where do you think you will need to look in the docs for how to do this?

5. Add a **scope** to your "secret" route, in order to restrict anyone who _doesn't_ have `admin` privileges (in `user.js`) i.e. stop them from seeing the `secret.hbs` view.
