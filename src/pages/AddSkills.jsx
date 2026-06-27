import {useState} from 'react'
import NavBar from '../components/NavBar'

function AddSkill(){
    const [form, setForm] = useState({name: '', category:'', author: '', canTeach: true})

    return(
        <div>
            <NavBar/>
             <form
                onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
                }}
            >
                <input
                    type='text'
                    placeholder='Skill name'
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder='Author name'
                    value = {form.author}
                    onChange={(e) => setForm({...form, author: e.target.value})}
                />
                <select
                    value={form.category}
                    onChange={(e) => setForm({...form, category: e.target.value})}
                >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Design">Design</option>
                    <option value="Data">Data</option>
                </select>
                <input
                    type="checkbox"
                    value={form.canTeach}
                    onChange={(e) => setForm({...form, canTeach: e.target.checked})}
                />
                <button type='submit'>
                    Add Skill
                </button>
            </form>
        </div>       
    )
}
export default AddSkill