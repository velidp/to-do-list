import * as api from '../api';
import { AUTH } from '../constants/actionTypes';


export const signin = (formData, navigate, setWrongPassword) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});

        navigate('/home');
    } catch (error) {
        setWrongPassword(true);
        console.log(error);
    }
}

export const signup = (formData, navigate, setUserAlreadyExists) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});

        navigate('/home');
    } catch (error) {
        setUserAlreadyExists(true);
        console.log(error);
    }
}