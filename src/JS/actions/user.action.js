import { DELETE_USER, FAIL_USER, GET_ALL_USER, GET_USER, LOAD_USER, UPDATE_STATUS } from "../actionType/user.actionType"
import axios from 'axios'
import { toBePro } from "./bPro.action"

// pour avoir la liste des utilisateurs
export const getUsers = () => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        let config = { 
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.get("/api/users/all", config );
        // console.log(result); 
        dispatch({type: GET_ALL_USER, payload:result.data.listUsers});
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data.errors});
    }
}

// pour avoir un seul utilisateur

export const getOneUser = (id) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        let config = { 
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.get(`/api/users/${id}`, config);
        dispatch ({type: GET_USER, payload: result.data.userToGet})
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data.errors});

    }
}


// suppression d'un utilisateur

export const deleteUser = (id) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        let config = { 
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        const result = await axios.delete(`/api/users/${id}`, config);
        dispatch ({type:DELETE_USER, payload:result.data.userToDel})
        dispatch(getUsers()); // pour rafraichir la page après la suppression d'un user
    } catch (error) {
        dispatch({type:FAIL_USER, payload: error.response.data.errors});

    }
} 

// mise à jour du statut de validation

export const StatusValidation = (id, data, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const result = await axios.put(`/api/users/${id}`, data, config);

    dispatch({
      type: UPDATE_STATUS,
      payload: result.data, 
    });
    dispatch(toBePro())

  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error.response?.data?.errors || [{ msg: "Erreur inconnue" }],
    });
  }
};