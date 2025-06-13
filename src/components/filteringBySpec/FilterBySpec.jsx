import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { filterProfessionals, getProfessionals } from "../../JS/actions/bPro.action";
import { useState } from "react";
 
const specialities = [
  "Plombier",
  "Électricien",
  "Menuisier",
  "Peintre en bâtiment",
  "Jardinier",
  "Mécanicien",
  "Technicien en climatisation",
  "Maçon",
  "Carreleur",
  "Ferronnier",
];

function DropdownSpecialiteFilter() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(""); // pour l'affichage

const handleSelect = (specialite) => {
  setSelected(specialite === "")? 
    dispatch(getProfessionals()) // une action qui recharge toute la liste
   : 
    dispatch(filterProfessionals(specialite));
  
};

  return (
    <Dropdown onSelect={handleSelect} className="mb-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected ? `Spécialité : ${selected}` : "Filtrer par spécialité"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {specialities.map((spec) => (
          <Dropdown.Item key={spec} eventKey={spec}>
            {spec}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item eventKey="">Tous</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSpecialiteFilter;

