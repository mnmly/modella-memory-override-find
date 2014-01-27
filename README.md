# modella-memory-override-find

Allows you to find by object by the specified key.

Use this only for testing models, appearently not for prod :P

### install

```
$ npm install mnmly/modella-memory-override-find
# or
$ component install mnmly-modella-memory-override-find
```

### Example

```javascript
var memory = require('modella-memory');
var model = require('modella');
var override = require('modella-memory-find-override');
var auth = require('modella-auth');

// Override find so that it can find model by 
// User.find({email: 'email@tofind.com'});
override(memory, 'email');

var User = model('User');

User
  .attr('id')
  .attr('password')
  .attr('email');

var email = 'sample@sample.com';
var pass = 'secure';
var user = new User({ email: email, password: pass });

/**
 * Save one.
 */
user.save(onSave);

/**
 * on save, I wanna find that one.
 */ 
function onSave(function(){
  // Just beacause modella-auth find user by Model.get({email: email})
  User.authorize(email, password, function(err, _user){
    _user.email() === user.email();
  });
};

```

