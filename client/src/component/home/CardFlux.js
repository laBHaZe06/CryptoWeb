import React , { useState } from 'react';
import '../../assets/css/style.css';

import NewsActu from './news_Actu';
import NewsNFT from './news_NFT';
import NewsBTC from './news_BTC';
import NewsETH from './news_ETH';

const CardFlux = (props) => {


  const [fluxActive, setfluxActive] = useState(true); 

  function printFlux(select) {
    setfluxActive(select)
  }
    
  return (
    <div className='container_CardAdmin'>
      <div className='container_button'>
        <button type="button" className="nav_button" onClick={() => printFlux(1)} >{props.actu}</button>
        <button type="button" className="nav_button" onClick={() => printFlux(2)} >{props.btc} </button>
        <button type="button" className="nav_button" onClick={() => printFlux(3)} >{props.eth}</button>
        <button type="button" className="nav_button" onClick={() => printFlux(4)} >{props.nft}</button>
      </div>
      <div className='container_tabFlux' id="style-1">          
       <table>
          {fluxActive == 1 && <NewsActu/>}
          {fluxActive == 2 && <NewsNFT/> }
          {fluxActive == 3 && <NewsBTC/>}
          {fluxActive == 4 && <NewsETH/>}
      </table> 
      </div> 
    </div>  
    );
  }

export default CardFlux;