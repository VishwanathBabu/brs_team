function Student(){
    return (
        <>
            <div className="wrapper">
                <div className="container">
                <h2>Student LOR Request Form</h2>
                <form method="POST" action={"http://localhost:5000/api/requests"}>
                    <label htmlFor="reg_no">Registration No:</label>
                    <input type="text" id="reg_no" name="reg_no" required />
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="exam_score">Exam Score:</label>
                    <input type="number" id="exam_score" name="exam_score" required />
                    <label htmlFor="faculty_name">Faculty Name:</label>
                    <input type="text" id="faculty_name" name="faculty_name" required />
                    <label htmlFor="faculty_id">Faculty ID:</label>
                    <input type="text" id="faculty_id" name="faculty_id" required />
                    <label htmlFor="faculty_email">Faculty Email:</label>
                    <input type="email" id="faculty_email" name="faculty_email" required />
                    <label htmlFor="university_list">Tentative University List:</label>
                    <textarea id="university_list" name="university_list" rows="3" required></textarea>
                    <button className="form-submit-btn" type="submit">Submit</button>
                </form>
                </div>   
            </div>
        </>
    )
}

export default Student