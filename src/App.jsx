import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SkillCard from './components/skillCard.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
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
