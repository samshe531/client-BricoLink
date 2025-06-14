import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../JS/actions/user.action';
import ListUsers from '../../components/listUsers/ListUsers';
import Sidebar from '../../components/sideBar/SideBar';
import './dashBoard.css'

const DashBoard = () => {
const dispatch = useDispatch();
const users = useSelector(state => state.userReducer.users);
// console.log(users)
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])
  
  return (
  
    <div className="dashboard-layout">
      <Sidebar />
      <div className='dashboard-content'>
     <h2>La liste des utilisateurs est: </h2>
     <ListUsers users={users} />
    </div>
    </div>
    
  )
}

export default DashBoard