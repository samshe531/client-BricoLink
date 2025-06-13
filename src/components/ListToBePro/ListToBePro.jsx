import React from 'react'

import CardProfessional from '../cardProfessional/CardProfessional';
import { useSelector } from 'react-redux';
// import './listProfessionals.css'
const ListToBePro = () => {
    const enAttente = useSelector(state => state.bProreducer.listeEnAttente)
  return (
    
   <div className="enAttente">
      {enAttente.length > 0 ? (
  enAttente
    .map((bPro) => (
      <CardProfessional
        key={bPro._id}
        ouvrier={bPro}
      />
    ))
) : (
  <p className="text-gray-600 mt-4">Aucun ouvrier trouvé.</p>
)}  

    </div>
  )
}

export default ListToBePro