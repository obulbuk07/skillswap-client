import NavBar from "../components/NavBar"
import SkillCard from "../components/skillCard";
import FilterBar from "../components/FilterBar";
import { useState, useEffect } from 'react'


function Home(){
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/skills')
        .then(res => res.json())
        .then(data => setSkills(data))
    }, [])
    const [activeCategory, setActiveCategory] = useState('All')
    const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)
   return(

        <div>
            <NavBar/>
            <FilterBar onCategoryChange={setActiveCategory} activeCategory={activeCategory}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {filteredSkills.map(skill => (
                <SkillCard 
                    key = {skill.id}
                    name = {skill.name}
                    category = {skill.category}
                    author = {skill.author}
                    canTeach = {skill.can_teach}
                />
            ))}
            </div>
            
        </div>
   )
}
export default Home;