import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Form from '../components/Form'
import Home from '../components/Home'
import Student from '../components/Student'
import Teacher from '../components/Teacher'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/student" element={<Form/>}/> 
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/student/submit" element={<Form />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
