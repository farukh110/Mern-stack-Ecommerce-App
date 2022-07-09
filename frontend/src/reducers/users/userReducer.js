import { login_request, login_success, login_fail, clear_errors } from "../../appConstants/user/userConstants";


export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        
        case login_request:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case login_success: 
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case login_fail: 
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case clear_errors:
            return {
                ...state,
                error: null
            } 
    
        default:
            return state;
    }
}