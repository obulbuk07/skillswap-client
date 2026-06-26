
import SkillCard from './components/skillCard.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
       <NavBar/>
      <SkillCard
        name="React + Hooks"
        category="Frontend"
        author="Алекс"
        canTeach={true}
      />
    </div>
  )
}

export default App
