import http from '../api_call';

export const getUser = () => {
    return http.get('/user/');
}
export const getUserById = (id) => {
    return http.get(`/user/${id}`);
}

export const registerUser = (values) => {
    return http.post('/user/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
      });
}


export const loginUser = (values) => {
    return http.post('/login/', {
        email: values.email,
        password: values.password,
      });
}

export const updateUser = (values) => {
    return http.post('/user/1', {
        email: values.email,
        password: values.password,
      });
}