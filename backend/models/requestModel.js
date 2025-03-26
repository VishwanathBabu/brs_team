const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    reg_no: {type: String},
    student_name: {type: String},
    exam_score: {type: Number},
    faculty_id: {type: String},
    faculty_name: {type: String},
    faculty_email: {type: String},
    applied_date: {type: Date, default: Date.now},
    university_list: {type: [String]},
    status: {type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending'}
});

module.exports = mongoose.model('requests', requestSchema);
