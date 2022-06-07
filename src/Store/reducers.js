const initialState = {
    access:"12345678"
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
        default:
            return state;
    }
}