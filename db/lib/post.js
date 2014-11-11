var db = require('mongoose')
,   Post;

Post = new db.Schema({
  title: { type: String },
  content: { type: String, required: true },
  _user: { type: db.Schema.Types.ObjectId, ref: 'User' }
});
