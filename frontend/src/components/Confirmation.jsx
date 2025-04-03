import { useNavigate } from 'react-router-dom';

function Confirmation() {
    const navigate = useNavigate();

    return (
        <div className="confirmation-wrapper">
            <div className="confirmation-container">
                <div className="confirmation-icon">✓</div>
                <h2>Request Submitted Successfully!</h2>
                <p>Your Letter of Recommendation request has been recorded and sent to the faculty.</p>
                <p className="status-info">Current Status: <span className="status pending">Pending</span></p>
                <button 
                    className="back-to-dashboard-btn"
                    onClick={() => navigate('/student')}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

export default Confirmation;