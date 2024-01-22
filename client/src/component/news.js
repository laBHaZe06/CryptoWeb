import React , { useEffect } from 'react';
import './../assets/css/style.css';
import {getUser} from '../service/call_api/user_service';

const News = () => {

 useEffect(() => {
    console.log(getUser());
  });

  return (
    <>
        <div className="container">
      

      </div>
  
    </>
  ); }


export default News;