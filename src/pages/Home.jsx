import NavBar from "../components/NavBar"
import SkillCard from "../components/skillCard";

const skills = [
  { id: 1, name: 'React', category: 'Frontend', author: 'Alex', canTeach: true },
  { id: 2, name: 'PostgreSQL', category: 'Backend', author: 'Maria', canTeach: false },
  { id: 3, name: 'Figma', category: 'Design', author: 'Dima', canTeach: true },
]

function Home(){
   return(
        <div>
            <NavBar/>
            {skills.map(skill => (
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