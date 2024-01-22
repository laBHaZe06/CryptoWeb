import React from 'react';
import './../assets/css/login.css';
import { Link } from 'react-router-dom';

const ButtonGoogle = () => {
    return (

    <button type="submit" className="btn form_input" onClick={() =>     window.location.href="http://20.224.16.120:5000/api/auth/google"}>
           <i className="fab fa-google mr-2"></i> Login with Google
       </button>
    );
}

export default ButtonGoogle;

{/* <div    className="btngoogle" >
<a href="http://20.224.16.120:5000/api/auth/google">
</a>    <i className="fab fa-google mr-2"></i> Login with Google

</div> */}
