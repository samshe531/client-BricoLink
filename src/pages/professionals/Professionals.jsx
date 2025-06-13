
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ListProfessional from '../../components/listProfessional/ListProfessional';
import { getProfessionals } from '../../JS/actions/bPro.action';
import Sidebar from '../../components/sideBar/SideBar';
import './professionals.css'
const Professionals = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);
  return (
    <div className='professionnal-container' >
      <Sidebar />

      <div className='list-pro'>
      <h2 className="text-center my-4">La liste des professionnels :</h2>
      <ListProfessional />
      </div>
    </div>
  );
}

export default Professionals;
