var db = require('mongoose')
,   Stock;

Stock = new db.Schema({
  symbol: { type: String },
  _quotes: [{ type: db.Schema.Types.ObjectId, ref: 'Quote' }]
});
