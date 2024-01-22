import React , { useEffect } from 'react';
import './../assets/css/style.css';
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";



const Admin = () => {


  return (
    <>
        <div class="container">
      
        <CryptoCurrencyMarket colorTheme="dark" locale="fr" width="100%" height={1000}></CryptoCurrencyMarket>

      </div>
  
    </>
  ); }


export default Admin;