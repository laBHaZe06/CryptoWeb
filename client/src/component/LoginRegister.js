import React from 'react';
import { useEffect, useState } from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {loginUser} from '../service/call_api/user_service';
import './../assets/css/login.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ButtonGoogle from './ButtonGoogle'
 const LoginRegister = (props) => {
    const [datas, setDatas] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("email invalide")
            .required("l'email est obligatoire"),
        password: Yup.string()
            .required("Mot de passe est obligatoire")
            .min(8, "Mot de passe doit être plus grand que 8 caractères")
            .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    });

        async function handleSubmit (values) {

        let login = await loginUser(values);
        console.log(login)
        if(login.data.username){
            localStorage.setItem("username",login.data.username)
        }

        if(login.data.role){
            localStorage.setItem("role",login.data.role)
        }
        if(login.data.email){
            localStorage.setItem("email",login.data.email)
        }
        if(login.data.id){
            localStorage.setItem("id",login.data.id)
        }
        if(login.data.access_token){
            localStorage.setItem("token",login.data.access_token)
            setToken(login.data.access_token)
            window.location.reload(false);

        }

    };


 useEffect(() => {
    if(token){
        navigate("/");
    }
    },[token]);
     return (
        <div className="container_2">
            <div className="container_login">
                    <h1 className="text-center">Connexion</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form className="register-form">                                  
                                <div className="form_style">
                                    <label htmlFor="email">
                                    <i class="fa-solid fa-envelope"></i> Email:
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form_input"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="error_form"
                                    />
                                </div>
                                <div className="form_style">
                                    <label htmlFor="password">
                                    <i class="fa-sharp fa-solid fa-lock"></i>Mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form_input"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="error_form"
                                    />
                                </div>
                                
                             
                                <div className="form-group d-flex justify-content-end gap-3">
                                    <button
                                        type="submit"
                                        className="btn form_input"
                                    >
                                    <i class="fa-solid fa-right-to-bracket"></i>Se connecter
                                    </button>

                                </div>

                            </Form>
                        )}
                    </Formik>
                    <button type="submit" className="btn form_input">
                      <Link type="submit"to="/register">S'incrire</Link> 
                    </button>
                    <ButtonGoogle/>

            </div>
        </div>

     )
 }

 export default LoginRegister;
