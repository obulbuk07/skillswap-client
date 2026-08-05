import {Link} from 'react-router-dom'

function PageNotFound(){
    return(
        <div className='w-2/4 mx-auto text-center pt-40'>
            <h1 className='text-3xl pb-4'>Page Not Found</h1>
            <h2 className='text-2xl pb-2'>404</h2>
            <Link to="/" className='text-grey hover:underline'>Go back to homepage</Link>
        </div>
    )
}

export default PageNotFound