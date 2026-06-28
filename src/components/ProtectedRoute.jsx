
import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}){
    const token = localStorage.getItem('token')
    if(token == null){
        return <Navigate to='/login'/>
    }else{
        return children
    }
}

export default ProtectedRoute