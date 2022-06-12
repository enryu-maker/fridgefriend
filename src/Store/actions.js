import axios from "axios"
import { useSelector } from "react-redux"
import axiosIns from "../Helper/Helper"
// const token = useSelector(state=>state.Reducers.access)
export const Init = () => {
    return async dispatch => {
    const access =JSON.parse(sessionStorage.getItem('access'))
    if (access !== null) {
        dispatch({
          type: 'LOGIN',
          payload: access,
        })
      }
    }
  }
export const LoginAction = (token,refresh) => {
    return async dispatch => {
    if (token && refresh) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
    }
  }
  export const GetInventory = (token) => {
    
    return async dispatch => {
      let data = await axios.get('http://127.0.0.1:8000/api/inventory/',{
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
              },
        })
      dispatch({
        type: 'GET',
        payload: data.data,
      })
    }
  }
export const Logout = () => {
    return async dispatch => {
      dispatch({
        type: 'LOGOUT',
        payload: null,
      })
    }
  }