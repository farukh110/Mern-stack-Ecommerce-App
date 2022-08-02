import { login_request, login_success, login_fail, register_user_request, register_user_success, register_user_fail, 
    clear_errors, load_user_request, load_user_success, load_user_fail, logout_success, logout_fail,
update_profile_request, update_profile_success, update_profile_reset, update_profile_fail, update_password_request, update_password_success, update_password_reset, update_password_fail, forget_password_request, forget_password_success, forget_password_fail } from "../../appConstants/user/userConstants";

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

export const profileReducer = (state = { }, action) => {

    switch (action.type) {
        
        case update_profile_request:
        case update_password_request:
            return {
                ...state,
                loading: true,
            };
            
        case update_profile_success: 
        case update_password_success:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
    
        case update_profile_fail: 
        case update_password_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        
        case update_profile_reset:
        case update_password_reset:    
            return {
                ...state,
                isUpdated: false,
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

export const forgetPasswordReducer = (state = { }, action) => {

    switch (action.type) {
        
        case forget_password_request:
            return {
                ...state,
                loading: true,
                error: null
            };
            
        case forget_password_success:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
    
        case forget_password_fail:
            return {
                ...state,
                loading: false,
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