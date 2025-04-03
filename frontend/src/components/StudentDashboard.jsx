import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Entry from './Entry';

function StudentDashboard() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2>LOR Request Dashboard</h2>
                    <div className="dashboard-actions">
                        <button 
                            className="new-request-btn"
                            onClick={() => navigate('/new-request')}
                        >
                            + New Request
                        </button>
                        <button 
                            className="home-return-btn"
                            onClick={() => navigate('/')}
                        >
                            Return to Home
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-state">
                        <p>Loading your requests...</p>
                    </div>
                ) : error ? (
                    <div className="error-state">
                        <p>{error}</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className="empty-state">
                        <p>No requests found. Create your first request!</p>
                    </div>
                ) : (
                    <div className="requests-list">
                        {requests.map(request => (
                            <Entry key={request._id} request={request} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentDashboard;