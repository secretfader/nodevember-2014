var db = require('mongoose')
,   User;

User = new db.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  _posts: [{ type: db.Schema.Types.ObjectId, ref: 'Post' }]
});
