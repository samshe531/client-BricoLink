
import React from 'react';
import CardProfessional from '../cardProfessional/CardProfessional';
import { useSelector } from 'react-redux';
import './listProfessionals.css';
import FilterBySpec from '../filteringBySpec/FilterBySpec';

const ListProfessional = () => {
  // const { listPro, filteredList } = useSelector((state) => state.bProreducer);
const listPro = useSelector(state => state.bProreducer.listPro);
const filteredList = useSelector(state => state.bProreducer.filteredList);
const professionals = filteredList.length ? filteredList : listPro;

  // const professionals = filteredList.length > 0 ? filteredList : listPro;

  return (
    <div>
      <FilterBySpec listPro={listPro} />
      <div className="listPro">
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

