import { login_request, login_success, login_fail, register_user_request, register_user_success, register_user_fail, 
    clear_errors, load_user_request, load_user_success, load_user_fail, logout_success, logout_fail } from "../../appConstants/user/userConstants";


export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        
        case login_request:
        case register_user_request:
        case load_user_request:
            return {
                loading: true,
                isAuthenticated: false,
            };
            
        case login_success: 
        case register_user_success:
        case load_user_success: 
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case logout_success:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };    
        
        case logout_fail:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            
        case login_fail: 
        case register_user_fail:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case load_user_fail:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case clear_errors:
            return {
                ...state,
                error: null
            } 
    
        default:
            return state;
    }
}