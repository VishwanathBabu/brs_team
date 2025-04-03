import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const formData = {
                reg_no: e.target.reg_no.value,
                student_name: e.target.student_name.value,
                exam_score: parseFloat(e.target.exam_score.value),
                faculty_name: e.target.faculty_name.value,
                faculty_id: e.target.faculty_id.value,
                faculty_email: e.target.faculty_email.value,
                university_list: e.target.university_list.value
            };

            const response = await axios.post('http://localhost:5000/api/requests', formData);
            
            if (response.status === 201) {
                navigate('/confirmation');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setError(error.response?.data?.message || 'Failed to submit request. Please try again.');
        }
    };

    const handleCancel = () => {
        navigate('/student');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
                <label htmlFor="reg_no">Registration Number</label>
                <input 
                    type="text" 
                    id="reg_no" 
                    name="reg_no" 
                    placeholder="Enter your registration number"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="student_name">Student Name</label>
                <input 
                    type="text" 
                    id="student_name" 
                    name="student_name" 
                    placeholder="Enter your full name"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="exam_score">Exam Score</label>
                <input 
                    type="number" 
                    id="exam_score" 
                    name="exam_score" 
                    placeholder="Enter your exam score"
                    min="0" 
                    max="100" 
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="faculty_name">Faculty Name</label>
                <input 
                    type="text" 
                    id="faculty_name" 
                    name="faculty_name" 
                    placeholder="Enter faculty name"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="faculty_id">Faculty ID</label>
                <input 
                    type="text" 
                    id="faculty_id" 
                    name="faculty_id" 
                    placeholder="Enter faculty ID"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="faculty_email">Faculty Email</label>
                <input 
                    type="email" 
                    id="faculty_email" 
                    name="faculty_email" 
                    placeholder="Enter faculty email"
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="university_list">Tentative University List</label>
                <textarea 
                    id="university_list" 
                    name="university_list" 
                    rows="4" 
                    placeholder="Enter universities (one per line)"
                    required 
                ></textarea>
            </div>

            <div className="form-actions">
                <button type="submit" className="form-submit-btn">
                    Submit Request
                </button>
                <button 
                    type="button" 
                    className="form-cancel-btn"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default Form;