const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = new Schema({
  addressType: { // 'permanent' or 'temporary'
    type: String,
    required: true,
    enum: ['permanent', 'temporary']
  },
  province: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  municipality: {
    type: String,
    required: true
  },
  ward: {
    type: String,
    required: true
  }
});

const VolunteerSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  nationality: {
    type: String,
    required: true
  },
  addresses: [AddressSchema], // Array of addresses
  expertise: {
    type: String
  },
  desiredSkills: {
    type: String
  },
  sectors: [{
    type: String,
  }],
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'reviewed', 'approved', 'rejected']
  },
  applicationDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', VolunteerSchema);