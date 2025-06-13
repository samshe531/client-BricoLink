import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  toBePro } from '../../JS/actions/bPro.action';
import Sidebar from '../../components/sideBar/SideBar';
// import './professionals.css'
import ListToBePro from '../../components/ListToBePro/ListToBePro';


const ListeEnAttente = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toBePro());
  }, [dispatch]);
  return (
    <div className='professionnal-container' >
      <Sidebar />

      <div className='list-pro'>
      <h2 className="text-center my-4">En attente... :</h2>
      <ListToBePro />
      </div>
    </div>
  );
}

export default ListeEnAttente;