
import Home from './pages/Home.jsx'
import AddSkill from './pages/AddSkill.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddSkill/>}/>
        </Routes>
    </div>

  )
}

export default App
