const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CProfileSchema = new Schema({
  Company: {type: Schema.Types.ObjectId, ref: 'Company'},
  Name: { type: String, required: true, trim:true },
  Description: { type: Date, required: true },
  CriticalSkills: { type: Date, required: true },
  DesiredSkills: { type: Date, required: true },
  UGPackage : { type: String, required: true},
  PGPackage: { type: String, required: true },
  CPICriteria : { type: String, required: true}, 
}, {
  timestamps: true,
});

const CProfile = mongoose.model('CProfile', CProfileSchema);

module.exports = CProfile;