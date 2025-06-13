
import React from 'react';
import CardProfessional from '../cardProfessional/CardProfessional';
import { useSelector } from 'react-redux';
import './listeValide.css';
import FilterBySpec from '../filteringBySpec/FilterBySpec';

const ListProfessional = () => {
  // const { listPro, filteredList } = useSelector((state) => state.bProreducer);
const validList = useSelector(state => state.bProreducer.validList);
const filteredList = useSelector(state => state.bProreducer.filteredList);
const professionals = filteredList.length ? filteredList : validList;

  // const professionals = filteredList.length > 0 ? filteredList : listPro;

  return (
    
    <div>
      <FilterBySpec validList={validList} />
      <div className="listeValide">
        {professionals && professionals.length > 0 ? (
          professionals.map((pro) => (
            <CardProfessional key={pro._id} ouvrier={pro} />

          ))
        ) : (
          <p className="text-gray-600 mt-4">Aucun ouvrier trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default ListProfessional;