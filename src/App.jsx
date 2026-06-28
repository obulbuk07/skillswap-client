
import Home from './pages/Home.jsx'
import AddSkill from './pages/AddSkill.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddSkill/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>

  )
}

export default App
