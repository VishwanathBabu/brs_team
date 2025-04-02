import {Link} from "react-router-dom"

function Home(){
    return (
        <>
            <div className="wrapper-home">
                <div className="container-home">
                    <h2>Select Your Role</h2>
                    <Link to="/student" className="a">Student</Link>
                    <Link to="/teacher" className="a">Teacher</Link>
                </div>
            </div>  
        </>
    )
}

export default Home