import React , { useEffect, useState } from 'react';
import '../../assets/css/style.css';
import CardCrypto from './cardCrypto'
import {getCryptoFav} from '../../service/call_api/crypto_service';


const Crypto = () => {
  const [cryptoList, setACryptoList] = useState();

  function getCrypto() {
    getCryptoFav().then(response => setACryptoList(
      Object.keys(response.data).map((key, index) => {
        return (
          <CardCrypto crypto={response.data[key].pair} />
        );
      })
      )
    );
  }
  
  useEffect(() => {
    getCrypto()
  }, []);
  return (
    <>
        <div className='container_Crypto'>
          {cryptoList}
      </div>
    </>
  ); }


export default Crypto;