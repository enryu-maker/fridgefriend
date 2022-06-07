export const LoginAction = (token,refresh) => {
    return async dispatch => {
    //   if (token && refresh) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    // }
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