import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Register(){
    const [form, setForm] = useState({name: '', email: '', password:''})
    const navigate = useNavigate()
    return(
        <div className='max-w-lg mx-auto mt-30 bg-white p-8 rounded-xl border border-gray-200'>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    fetch('http://localhost:3000/api/auth/register', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(form), 
                    })
                    .then(res => res.json())
                    .then(data => navigate('/login'))
                }}
            >
                <h1 className='text-xl font-semibold text-gray-900 mb-6'>Registration</h1>
                <div className='flex flex-col gap-1 mb-4'>
                    <label className='text-sm font-medium text-gray-700' htmlFor="">Enter name</label>
                    <input className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400' type="text"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                    <label className='text-sm font-medium text-gray-700' htmlFor="">Enter email</label>
                    <input className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400' type="text"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                    <label className='text-sm font-medium text-gray-700' htmlFor="">Enter password</label>
                    <input className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400' type="password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                    />
                </div>
               
                <button className='px-6 py-2 mr-2 border-[3px] border-blue-600 rounded-[10px] hover:bg-blue-600 hover:text-white transition' type='submit'>
                    Sign in
                </button>
                <button className='px-6 py-2 border-[3px] border-blue-600 rounded-[10px] hover:bg-blue-600 hover:text-white transition' onClick={() => navigate('/login')} type='button'>
                    Already have an account
                </button>
                
            </form>
        </div>
    )
}

export default Register;