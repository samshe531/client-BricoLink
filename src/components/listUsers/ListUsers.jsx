import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../userCard/UserCard';
import './listUsers.css'
const ListUsers = () => {
  const users = useSelector (state => state.userReducer.users);
  // console.log(users)
  return (
    <div className='listUsers'>
      {users //.filter(user => user.isAdmin === false)
      .map(user => <UserCard key={user._id} user = {user} />)}
    </div>
  )
}

export default ListUsers