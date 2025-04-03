const express = require('express');
const router = express.Router();
const {
    createRequest,
    getAllRequests,
    getStudentRequests,
    updateRequestStatus
} = require('../controllers/requestController');

// Create new request
router.post('/requests', createRequest);

// Get all requests
router.get('/requests', getAllRequests);

// Get student requests
router.get('/requests/student/:reg_no', getStudentRequests);

// Update request status
router.patch('/requests/:id', updateRequestStatus);

module.exports = router;