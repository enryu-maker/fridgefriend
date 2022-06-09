

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
export const Logout = () => {
    return async dispatch => {
      dispatch({
        type: 'LOGOUT',
        payload: null,
      })
    }
  }