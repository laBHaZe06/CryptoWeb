import React , { useState } from 'react';
import '../../assets/css/style.css';
import Crypto from './crypto'
// import News_home from './news_home'
// import CardFlux from './CardFlux'

import NewsActu from './news_Actu';
import NewsNFT from './news_NFT';
import NewsBTC from './news_BTC';
import NewsETH from './news_ETH';

const Home = () => {

  const [fluxActive, setfluxActive] = useState(true); 

  function printFlux(select) {
    setfluxActive(select)
  }

  return (
    
    <>
        <div class="container">
          <div class="container_home">
            <div class="container_crypto">
              <Crypto />
            </div>
            <div className='container_button_home'>
              <button type="button" className="button_home" onClick={() => printFlux(1)}> ACTU</button>
              <button type="button" className="button_home" onClick={() => printFlux(2)}> BTC</button>
              <button type="button" className="button_home"onClick={() => printFlux(3)} >ETH</button>
              <button type="button" className="button_home"onClick={() => printFlux(4)} >NFT</button>
              <div className='container_news_home' id="style-1">
                {fluxActive == 1 && <td><NewsActu/></td>}
                {fluxActive == 2 && <td><NewsNFT/> </td>}
                {fluxActive == 3 && <td><NewsBTC/></td>}
                {fluxActive == 4 && <td><NewsETH/></td>}
              </div>
            </div>
          </div>
      </div>
    </>
  ); }


export default Home;