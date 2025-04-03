const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    reg_no: {
        type: String,
        required: true,
        index: true
    },
    student_name: {
        type: String,
        required: true
    },
    exam_score: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    faculty_name: {
        type: String,
        required: true
    },
    faculty_id: {
        type: String,
        required: true
    },
    faculty_email: {
        type: String,
        required: true
    },
    university_list: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: String,
        default: 'Request under review'
    }
}, {
    timestamps: true
});

// Compound index to prevent duplicate requests
requestSchema.index({ 
    reg_no: 1, 
    university_list: 1, 
    requestDate: 1 
}, { 
    unique: true 
});

module.exports = mongoose.model('Request', requestSchema);