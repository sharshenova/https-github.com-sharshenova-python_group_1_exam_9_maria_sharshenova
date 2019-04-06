import axios, {LOGIN_URL} from "../../api-urls";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginRequest = () => {
    return {type: LOGIN_REQUEST}
};

export const loginSuccess = (data) => {
    return {type: LOGIN_SUCCESS, data}
};

export const loginError = (errors) => {
    return {type: LOGIN_ERROR, errors}
};

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest());
        return axios.post(LOGIN_URL, {username, password}).then(response => {
            console.log(response);
            // добавляется auth-token в localStorage при входе
            localStorage.setItem('auth-token', response.data.token);

            // отсюда вернётся действие из loginSuccess()
            return dispatch(loginSuccess(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            // либо отсюда вернётся действие из loginError()
            return dispatch(loginError(error.response.data));
        });
    }
};