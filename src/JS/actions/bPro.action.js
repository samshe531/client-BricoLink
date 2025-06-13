import axios from "axios";
import { FAIL_BPRO, GET_ALL_PROFESSIONAL, GET_PROFESSIONAL, GET_PROS_VALID, GET_TO_BE_PRO, LOAD_BPRO, SET_FILTERED_PROS, SUCCESS_BPRO, UPDATE_PROFESSIONAL,  } from "../actionType/bPro.actionType";



export const becomePro = (formData, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_BPRO });

  try {
    // Création d'un objet FormData
    const data = new FormData();
    data.append("photo", formData.photoFile); // fichier image
    data.append("governorat", formData.governorat);
    data.append("delegation", formData.delegation);
    data.append("cite", formData.cite);
    data.append("description", formData.description);
    data.append("zoneDeplacement", formData.zoneDeplacement);
    data.append("speciality", formData.speciality);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };

    const result = await axios.post("/api/users/professional", data, config);

    dispatch({ type: SUCCESS_BPRO, payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({
      type: FAIL_BPRO,
      payload: error.response?.data?.errors || [{ msg: "Une erreur s'est produite." }],
    });
  }
};



// l'action qui se déclenche pour afficher tout les professionnels(validé, en attente et refusé)

export const getProfessionals = () => async (dispatch) => {
    dispatch({type: LOAD_BPRO})
    try {
        const result = await axios.get("/api/pro/allProfessionals" );
        // console.log(result.data.listPro); 
        dispatch({type: GET_ALL_PROFESSIONAL, payload:result.data.listPro});
        // dispatch(getProfessionals())
    } catch (error) {
        dispatch({type:FAIL_BPRO, payload: error.response.data.errors});
        
    }
}

// l'action qui se déclenche pour afficher la liste pro (validé et en attente)
export const getFiltredList = () => async (dispatch) => {
  dispatch({type:LOAD_BPRO})
  try {
    const result =await axios.get("/api/pro/listePro");
    // console.log(result.data.validList)
    dispatch ({type:GET_PROS_VALID, payload:result.data.validList});
    dispatch(getFiltredList());
  } catch (error) {
    dispatch({type:FAIL_BPRO, payload: error.response.data.errors});
  }
}



//l'action qui se déclenche pour avoir la liste des demandes pour avoir les profiles pro("en attente")
export const toBePro = () => async (dispatch) => {
  dispatch({type: LOAD_BPRO})
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get('/api/pro/toBePro',  config);
    // console.log(result.data.listeEnAttente)
    dispatch({type:GET_TO_BE_PRO, payload:result.data.listeEnAttente})
  } catch (error) {
    dispatch({type:FAIL_BPRO, payload: error.response.data.errors});
  }
}

export const getOneProfessional = (id) => async (dispatch) => {
  if (!id) {
    console.error("❌ getOneProfessional: id est undefined");
    return;
  }

  dispatch({ type: LOAD_BPRO });

  try {
    const result = await axios.get(`/api/pro/${id}`);
    
    dispatch({
      type: GET_PROFESSIONAL,
      payload: result.data.pro,
    });

    // console.log("✅ result.data :", result.data);
  } catch (error) {
    console.error("❌ Erreur GET :", error.response?.data || error.message);
    
    dispatch({
      type: FAIL_BPRO,
      payload: error.response?.data?.errors || [{ msg: "Erreur serveur" }],
    });
  }
};



export const fetchProByUserId = (userId) => async (dispatch) => {
  dispatch({ type: LOAD_BPRO });

  try {
    const result = await axios.get(`/api/pro/by-user/${userId}`);
    dispatch({ type: GET_PROFESSIONAL, payload: result.data.pro });
  } catch (error) {
    console.error("❌ Erreur GET :", error.response?.data || error.message);
    dispatch({
      type: FAIL_BPRO,
      payload: error.response?.data?.errors || [{ msg: "Erreur serveur" }],
    });
  }
};




// action qui se déclenche lors de la mise à jours du profile Pro
export const updateProfilePro = (id, data) => async (dispatch) => {
  dispatch({type: LOAD_BPRO})
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.put(`/api/pro/${id}`, data, config);

    dispatch({type:UPDATE_PROFESSIONAL, payload:result.data.updatedPro})
  } catch (error) {
    dispatch({type:FAIL_BPRO, payload: error.response.data.errors});
  }
}

//filtrer selon sécialité
export const filterProfessionals = (speciality) => async (dispatch) => {
  dispatch({type: LOAD_BPRO})
  try {
    const res = await axios.get("/api/pro/filterPro", {
      params: speciality ? { speciality } : {},
    });
      console.log(res.data)
    dispatch({ type: SET_FILTERED_PROS, payload: res.data });
    // console.log(res.data)
  } catch (err) {
    console.error("Erreur lors du filtrage :", err.message);
  }
};

