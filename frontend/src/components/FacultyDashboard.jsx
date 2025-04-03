import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FacultyDashboard() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/requests');
            setRequests(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching requests:', err);
            setError('Failed to fetch requests');
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (requestId, newStatus, comments) => {
        try {
            await axios.patch(`http://localhost:5000/api/requests/${requestId}`, {
                status: newStatus,
                comments: comments
            });
            fetchRequests();
        } catch (err) {
            console.error('Error updating request:', err);
            alert('Failed to update request status. Please try again.');
        }
    };

    const navigate = useNavigate();

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2>Faculty Dashboard</h2>
                    <button 
                        className="home-return-btn"
                        onClick={() => navigate('/')}
                    >
                        Return to Home
                    </button>
                </div>

                {loading ? (
                    <div className="loading-state">
                        <p>Loading requests...</p>
                    </div>
                ) : error ? (
                    <div className="error-state">
                        <p>{error}</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className="empty-state">
                        <p>No pending requests found.</p>
                    </div>
                ) : (
                    <div className="requests-list">
                        {requests.map(request => (
                            <div key={request._id} className={`request-entry ${request.status}`}>
                                <div className="request-header">
                                    <div className="request-date">
                                        {new Date(request.requestDate).toLocaleDateString()}
                                    </div>
                                    <div className={`request-status ${request.status}`}>
                                        {request.status.toUpperCase()}
                                    </div>
                                </div>
                                
                                <div className="request-body">
                                    <div className="request-info">
                                        <div className="info-group">
                                            <label>Student Name:</label>
                                            <span>{request.student_name}</span>
                                        </div>
                                        <div className="info-group">
                                            <label>Registration No:</label>
                                            <span>{request.reg_no}</span>
                                        </div>
                                        <div className="info-group">
                                            <label>Exam Score:</label>
                                            <span>{request.exam_score}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="universities-list">
                                        <label>Universities:</label>
                                        <p>{request.university_list}</p>
                                    </div>

                                    {request.status === 'pending' && (
                                        <div className="action-buttons">
                                            <button 
                                                className="approve-btn"
                                                onClick={() => handleStatusUpdate(
                                                    request._id, 
                                                    'approved',
                                                    'Request approved'
                                                )}
                                            >
                                                Approve
                                            </button>
                                            <button 
                                                className="reject-btn"
                                                onClick={() => handleStatusUpdate(
                                                    request._id, 
                                                    'rejected',
                                                    'Request rejected'
                                                )}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FacultyDashboard;