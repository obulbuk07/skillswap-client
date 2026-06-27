import {useState} from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

function AddSkill(){
    const [form, setForm] = useState({name: '', category:'', author: '', canTeach: true})
    const navigate = useNavigate()

    return(
        <div>
            <NavBar/>
             <form className='max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl border border-gray-200'
                onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
                navigate("/")
                }}
            >
                <h1 className="text-xl font-semibold text-gray-900 mb-6">Add new skill</h1>
                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-sm font-medium text-gray-700">Skill name</label>
                    <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" 
                        type='text'
                        placeholder='Skill name'
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-sm font-medium text-gray-700">Author name</label>
                    <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" 
                        type="text" 
                        placeholder='Author name'
                        value = {form.author}
                        onChange={(e) => setForm({...form, author: e.target.value})}
                    />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <select className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400'
                        value={form.category}
                        onChange={(e) => setForm({...form, category: e.target.value})}
                    >
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Design">Design</option>
                        <option value="Data">Data</option>
                    </select>
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => setForm({...form, canTeach: true})}
                        className={`flex-1 py-2 rounded-lg text-sm border ${form.canTeach ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white text-gray-500 border-gray-200'}`}
                    >
                        I can teach
                    </button>
                    <button
                        type="button"
                        onClick={() => setForm({...form, canTeach: false})}
                        className={`flex-1 py-2 rounded-lg text-sm border ${!form.canTeach ? 'bg-yellow-100 text-yellow-700 border-yellow-300' : 'bg-white text-gray-500 border-gray-200'}`}
                    >
                        I want to learn
                    </button>
                    </div>
                
                <div className='flex gap-3 mt-6'>
                    <button className='px-6 py-2 border-[3px] border-red-600 rounded-[10px] hover:bg-red-600 hover:text-white transition' type='button' onClick={() => navigate("/")}>
                        Cancel
                    </button>
                    <button className='px-6 py-2 border-[3px] border-blue-600 rounded-[10px] hover:bg-blue-600 hover:text-white transition' type='submit'>
                        Add Skill
                    </button>
                </div>
               
            </form>
        </div>       
    )
}
export default AddSkill