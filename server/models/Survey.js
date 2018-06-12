const mongoose = require('mongoose');

const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  Subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, re: 'User' }, // _ is like convention to show its a ref field.
  datesent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
