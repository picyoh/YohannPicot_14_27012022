import React from 'react'
import { Link } from 'react-router-dom'

function Error(){
    return(
        <div className='error'>
            <h2>An error happened</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error