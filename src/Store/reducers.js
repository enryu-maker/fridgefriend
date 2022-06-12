const initialState = {
    access:null,
    inv:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                access: action.payload,
              };
        case 'LOGOUT':
            return {
                ...state,
                access: action.payload,
              };
              case 'GET':
                return {
                    ...state,
                    inv: action.payload,
                  };
        default:
            return state;
    }
}