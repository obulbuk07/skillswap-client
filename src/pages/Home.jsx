import NavBar from "../components/NavBar"
import SkillCard from "../components/skillCard";
import FilterBar from "../components/FilterBar";
import { useState, useEffect } from 'react'
import Loader from "../components/Loader";
import {jwtDecode} from 'jwt-decode'


function Home(){
    const [skills, setSkills] = useState([])
    const [loading, setLoading] =useState(true)
    const token = localStorage.getItem('token')
    const currentUserId = token ? jwtDecode(token).id : null
    useEffect(() => {
        fetch('http://localhost:3000/api/skills')
        .then(res => res.json())
        .then(data => {
            setSkills(data)
            setLoading(false)
        })
    }, [])
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeCanTeachCategory, setActiveCanTeachCategory] = useState('All')
    const filteredSkills = skills
        .filter(skill => activeCategory === 'All' || skill.category === activeCategory)
        .filter(skill => {
            if(activeCanTeachCategory === 'Can teach') return skill.can_teach === true
            if(activeCanTeachCategory === 'Want to learn') return skill.can_teach === false
            return true 
        })

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/api/skills/${id}`, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => { 
            if(!res.ok){
                throw new Error("Not authorized to delete!")
            }
            return res.json()
        })
        .then(() => setSkills(skills.filter(skill => skill.id !== id )))
        .catch(err => alert(err.message))
    }
    if(loading) return <Loader/>
   return(
        <div>
            <NavBar/>
            <FilterBar
                onCategoryChange={setActiveCategory}
                activeCategory={activeCategory}
                onCanTeachCategoryChange={setActiveCanTeachCategory}
                activeCanTeachCategory={activeCanTeachCategory}
                />
                
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {filteredSkills.map(skill => (
                <SkillCard 
                    key = {skill.id}
                    name = {skill.name}
                    category = {skill.category}
                    canTeachCategory = {skill.canTeachCategory}
                    author = {skill.author}
                    canTeach = {skill.can_teach}
                    onDelete={() => handleDelete(skill.id)}
                    isOwner = {skill.user_id === currentUserId}
                    id={skill.id}

                />
            ))}
            </div>
            
        </div>
   )
}
export default Home;