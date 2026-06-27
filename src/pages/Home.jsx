import NavBar from "../components/NavBar"
import SkillCard from "../components/skillCard";
import FilterBar from "../components/FilterBar";
import { useState } from 'react'
const skills = [
  { id: 1, name: 'React', category: 'Frontend', author: 'Alex', canTeach: true },
  { id: 2, name: 'PostgreSQL', category: 'Backend', author: 'Maria', canTeach: false },
  { id: 3, name: 'Figma', category: 'Design', author: 'Dima', canTeach: true },
]

function Home(){
    const [activeCategory, setActiveCategory] = useState('All')
    const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)
   return(

        <div>
            <NavBar/>
            <FilterBar onCategoryChange={setActiveCategory} activeCategory={activeCategory}/>
            {filteredSkills.map(skill => (
                <SkillCard 
                    key = {skill.id}
                    name = {skill.name}
                    category = {skill.category}
                    author = {skill.author}
                    canTeach = {skill.canTeach}
                />
            ))}
        </div>
   )
}
export default Home;