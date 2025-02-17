import React, { useContext } from 'react'
import UserContext from '../context/userContext.js';


function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return <h1>User Not Found </h1>
  return (
    <div>
       <h1>profile: {user.username}</h1>
    </div>
   
  )
}

export default Profile