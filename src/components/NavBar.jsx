import {Link, useNavigate} from 'react-router-dom'

function NavBar(){
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const isLoggedIn = token !== null
    const handleLogOut = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return(
        <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
            <p className="text-blue-600 font-bold text-xl">SkillSwap</p>
            {isLoggedIn
                ? <button onClick={handleLogOut}>Log out</button>
                : <Link to="/login">Log in</Link>
            }
            <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Add Skill</Link>
        </nav>
    )
}
export default NavBar;