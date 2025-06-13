import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusValidation } from "../../JS/actions/user.action";
import { useNavigate } from "react-router-dom";

const ValidationControl = ({ ouvrier }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.user);

  // état local avec la valeur string, pas un objet
  const [newStatusValidation, setNewStatusValidation] = useState(
    ouvrier.statutValidation || "en attente"
  );

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setNewStatusValidation(newStatus);

    // Dispatch immédiatement après sélection
    dispatch(StatusValidation(ouvrier._id, { statutValidation: newStatus }, navigate));
  };

  if (!user?.isAdmin) return null;

  return (
    <div className="validation-control mt-3">
      <label htmlFor={`status-${ouvrier._id}`}>Changer statut :</label>
      <select
        id={`status-${ouvrier._id}`}
        name="statutValidation"
        value={newStatusValidation}
        onChange={handleChange}
        className="form-select"
      >
        <option value="en attente">En attente</option>
        <option value="validé">Validé</option>
        <option value="refusé">Refusé</option>
      </select>
    </div>
  );
};

export default ValidationControl;
