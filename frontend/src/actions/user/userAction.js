import { login_request, login_success, login_fail, register_user_request, 
    register_user_success, register_user_fail, clear_errors, 
    load_user_request, load_user_success, load_user_fail, logout_success, logout_fail } from "../../appConstants/user/userConstants";
import axios from 'axios';

// login

export const login = (email, password) => async (dispatch) => {

    try {
        
        dispatch({ type: login_request });

        const config = { headers: { "Content-Type": "application/json" }};

        const { data } = await axios.post(
            `/api/v1/login`,
            { email, password },
            config    
        );

        dispatch({ type: login_success, payload: data.user });

    } catch (error) {
        
        dispatch({ type: login_fail, payload: error.response.data.message });
    }
};

// register 

export const register = (userData) => async (dispatch) => {

    try {
        
        dispatch({ type: register_user_request });

        const config = { headers: { "Content-Type": "multipart/form-data" }};

        const { data } = await axios.post(`/api/v1/register`, userData, config);

        dispatch({ type: register_user_success, payload: data.user });    

    } catch (error) {

        dispatch({ type: register_user_fail, payload: error.response.data.message });
        
    }
};

// load users

export const loadUser = () => async (dispatch) => {

    try {
        
        dispatch({ type: load_user_request });

        const { data } = await axios.get(`/api/v1/me`);

        dispatch({ type: load_user_success, payload: data.user });

    } catch (error) {
        
        dispatch({ type: load_user_fail, payload: error.response.data.message });
    }
};

// logout

export const logout = () => async (dispatch) => {

    try {
        
        dispatch({ type: load_user_request });
        
        await axios.get('/api/v1/logout');

        dispatch({ type: logout_success });

    } catch (error) {
        
        dispatch({ type: logout_fail, payload: error.response.data.message });
    }
}

// clearing errors
export const clearErrors = () => async (dispatch) => {

    dispatch({ type: clear_errors });
};