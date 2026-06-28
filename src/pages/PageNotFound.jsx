import {Link} from 'react-router-dom'

function PageNotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <h2>404</h2>
            <Link to="/">Go back to homepage</Link>
        </div>
    )
}

export default PageNotFound