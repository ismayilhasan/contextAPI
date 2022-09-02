import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory();
    const gotoUsers = () => {
        history.push('/Cards')
    }
  return (
    <>
        <div className='direction-menu w-50 mx-auto mt-4'>
            <button onClick={gotoUsers} className='btn btn-success w-100'>Users</button>
        </div>
    </>
  )
}

export default Home