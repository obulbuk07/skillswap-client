import {Link, useNavigate} from 'react-router-dom'

function NavBar(){
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const isLoggedIn = token !== null
    const handleLogOut = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }
    const userName = localStorage.getItem('userName');
    return(
        <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
            <p className="text-blue-600 font-bold text-xl">SkillSwap</p>
            {isLoggedIn
                ?  <div className='flex gap-4'><div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-medium">{userName ? userName[0].toUpperCase() : '?'}</div><button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm' onClick={handleLogOut}>Log out</button> </div> 
                : <Link to="/login" className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm'>Log in</Link> 
            }
        </nav>
    )
}
export default NavBar;


//<Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Add Skill</Link>


