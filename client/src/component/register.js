import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {registerUser} from '../service/call_api/user_service';
import './../assets/css/login.css';

 const Register = (props) => {

    const initialValues = {
        firstName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Trop petit")
            .max(10, "Trop long!")
            .required("Ce champ est obligatoire"),
        email: Yup.string()
            .email("Email invalide")
            .required("L'email est obligatoire"),
        password: Yup.string()
            .required("Mot de passe est obligatoire")
            .min(8, "Mot de passe doit être plus grand que 8 caractères")
            .max(50, "Mot de passe doit être plus petit que 50 caractères"),
        confirmPassword: Yup.string()
            .required("Confirmation de mot de passe est obligatoire")
            .oneOf(
                [Yup.ref("password"), null],
                "Le mot de passe de confirmation ne correspond pas"
            ),
        acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
    });


    const handleSubmit = (values) => {
        
        console.log(registerUser(values));
    };
     return (
        <div className="container">
            <div className="container_login">
                    <h1 className="text-center"> Inscription:</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form className="register-form">
                                <div className="form_style">
                                    <label htmlFor="username">
                                    <i class="fa-solid fa-user"></i> Nom d'utilisateur:
                                    </label>
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form_input"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        component="small"
                                        className="error_form"
                                    />
                                </div>
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
                                    <i class="fa-sharp fa-solid fa-lock"></i> Mot de passe:
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
                                <div className="form_style">
                                    <label htmlFor="confirmPassword">
                                    <i class="fa-solid fa-key"></i> Confirmer le mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form_input"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="error_form"
                                    />
                                </div>
                                <div className="form-group form-check mb-5">
                                    <Field
                                        name="acceptTerms"
                                        type="checkbox"
                                        className="form-check-input"
                                    />
                                    <label
                                        htmlFor="acceptTerms"
                                        className="form-check-label"
                                    >
                                        J'ai lu et j'accepte
                                        les conditions
                                    </label>
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="small"
                                        className="error_form d-block"
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-end gap-3">
                                    <button
                                        type="submit"
                                        className="btn form_input"
                                    >
                                        S'inscrire
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
            </div>
        </div>

     )
 }

 export default Register;


//  <div className="container">
//  <div className="container_login">            <h2>S'incrire</h2>
// <form className="register-form" onSubmit={handleSubmit}>
//  <label htmlFor="name">Nom</label>
//  <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Nom" id="name" name="name" />
//  <label htmlFor="email">Email</label>
//  <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="votremail@gmail.com" id="email" name="email" />
//  <label htmlFor="password">Mot de passe</label>
//  <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//  <label htmlFor="password">Confirmer le mot de passe</label>
//  <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="********" id="confirmpassword" name="confirmpassword" />
//  <button type="submit">S'incrire</button>
//  {errorPass && <div>Mot de passe différent</div>}
// </form>
// </div>l
// </div>
