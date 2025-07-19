const mongoose = require('mongoose');
const {Schema} = mongoose;

const BloodRequestSchema = new Schema({
    bloodGroupNeeded: {
        type: String,
        required: [true, 'Blood group is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Standard blood groups
    },
    unitsNeeded: {
        type: Number,
        required: [true, 'Number of units needed is required'],
        min: [1, 'Units needed must be at least 1'],
    },
    urgency: {
        type: String,
        required: [true, 'Urgency level is required'],
        enum: ['Critical', 'High', 'Medium', 'Low'], // Define levels of urgency
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['Pending', 'Fulfilled', 'Partially Fulfilled', 'Cancelled', 'Expired'],
        default: 'Pending'
    },

    hospitalName: {
        type: String,
        required: [true, 'Hospital name is required'],
    },
    hospitalAddress: {
        type: String,
        required: [true, 'Hospital address is required'],
    },
    city: { 
        type: String,
        required: [true, 'City is required'],
    },
    contactPerson: {
        type: String,
        required: [true, 'Contact person name is required'],
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
    },

    requestedBy: {
        type: mongoose.Schema.ObjectId,
        required: true
    }

}, {
    timestamps: true 
});

module.exports = mongoose.model('BloodRequest', BloodRequestSchema);