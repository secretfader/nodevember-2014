var db = require('mongoose')
,   Quote;

Quote = new db.Schema({
  created_at: { type: Date },
  _stock: { type: db.Schema.Types.ObjectId, ref: 'Stock' }
});

Quote.pre('save', function (next) {
  if (this.isNew) this.created_at = new Date();
  next();
});

db.model('Quote', Quote);
