const Request = require('../models/Request');

const createRequest = async (req, res) => {
    try {
        console.log('Received request body:', req.body); // Debug log

        // Validate required fields
        const requiredFields = ['reg_no', 'student_name', 'exam_score', 'faculty_name', 'faculty_id', 'faculty_email', 'university_list'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Check for existing request
        const existingRequest = await Request.findOne({
            reg_no: req.body.reg_no,
            university_list: req.body.university_list,
            requestDate: {
                $gte: new Date(new Date().setHours(0, 0, 0, 0)),
                $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
        });

        if (existingRequest) {
            return res.status(400).json({
                message: 'A similar request has already been submitted today'
            });
        }

        // Create new request
        const request = new Request({
            ...req.body,
            requestDate: new Date(),
            status: 'pending'
        });

        const savedRequest = await request.save();
        console.log('Request saved successfully:', savedRequest); // Debug log
        res.status(201).json(savedRequest);

    } catch (error) {
        console.error('Create request error:', error);
        if (error.code === 11000) {
            res.status(400).json({
                message: 'Duplicate request detected. Please try again with different details.'
            });
        } else {
            res.status(500).json({
                message: 'Failed to create request',
                error: error.message
            });
        }
    }
};

const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find()
            .sort({ requestDate: -1 })
            .select('-__v'); // Exclude version key
        res.json(requests);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({
            message: 'Failed to fetch requests',
            error: error.message
        });
    }
};

const getStudentRequests = async (req, res) => {
    try {
        const requests = await Request.find({ reg_no: req.params.reg_no })
            .sort({ requestDate: -1 })
            .select('-__v');
        res.json(requests);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({
            message: 'Failed to fetch student requests',
            error: error.message
        });
    }
};

const updateRequestStatus = async (req, res) => {
    try {
        const updatedRequest = await Request.findByIdAndUpdate(
            req.params.id,
            { 
                status: req.body.status,
                comments: req.body.comments 
            },
            { 
                new: true,
                runValidators: true
            }
        );
        
        if (!updatedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }
        
        res.json(updatedRequest);
    } catch (error) {
        console.error('Database Error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Invalid status value',
                error: error.message
            });
        }
        res.status(500).json({
            message: 'Failed to update request',
            error: error.message
        });
    }
};

module.exports = {
    createRequest,
    getAllRequests,
    getStudentRequests,
    updateRequestStatus
};
