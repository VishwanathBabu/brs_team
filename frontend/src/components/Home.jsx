import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="wrapper-home">
            <div className="container-home">
                <h2>Bonafide Requisition System</h2>
                <button className="home-btn" onClick={() => navigate('/student')}>
                    Student
                </button>
                <button className="home-btn" onClick={() => navigate('/faculty')}>
                    Faculty
                </button>
            </div>
        </div>
    );
}

export default Home;