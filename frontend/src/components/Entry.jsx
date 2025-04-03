import React from 'react';

function Entry({ request }) {
    return (
        <div className={`request-entry ${request.status}`}>
            <div className="request-content">
                <div className="request-header">
                    <div className="request-date">
                        {new Date(request.requestDate).toLocaleDateString()}
                    </div>
                    <div className={`request-status ${request.status}`}>
                        {request.status.toUpperCase()}
                    </div>
                </div>
                
                <div className="request-details">
                    <div className="info-group">
                        <label>Student Name:</label>
                        <span>{request.student_name}</span>
                    </div>
                    <div className="info-group">
                        <label>Registration No:</label>
                        <span>{request.reg_no}</span>
                    </div>
                    <div className="info-group">
                        <label>Faculty:</label>
                        <span>{request.faculty_name}</span>
                    </div>
                    <div className="info-group">
                        <label>Universities:</label>
                        <span className="university-list">{request.university_list}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;