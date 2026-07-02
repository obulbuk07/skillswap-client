import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Login(){
    const [form, setForm] = useState({email: '', password:''})
    const navigate = useNavigate()
    return(
        <div className='max-w-lg mx-auto bg-white rounded-xl border border-gray-200 mt-30 '>
            <form className='p-8 flex flex-col gap-4 '
                onSubmit={(e) => {
                    e.preventDefault()
                    fetch('http://localhost:3000/api/auth/login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(form), 
                    })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                        navigate('/')
                    })
                }}
            >
                <h1 className='text-2xl font-semibold text-gray-900 mb-6'>Login</h1>
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
               
                <button className='px-6 py-2 border-[3px] border-blue-600 rounded-[10px] hover:bg-blue-600 hover:text-white transition' type='submit'>
                    Login
                </button>
                <p className='flex gap-4 pt-4'>Don't have an account? <p className='text-blue-600'><Link to="/register">Sing in</Link></p></p>
            </form>
        </div>
    )
}

export default Login;