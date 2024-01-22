import React , { useEffect,useState } from 'react';
import '../../assets/css/style.css';
import {getCryptoFav, getMarkets} from '../../service/call_api/crypto_service';
import { BiEdit, BiCheck} from "react-icons/bi";
import {addCrypto} from '../../service/call_api/crypto_service';
import SearchBar from './searchBar';


const CardListCrypto = () => {
  const [cryptoList, setACryptoList] = useState();
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const [edit5, setEdit5] = useState(false);
  const [edit6, setEdit6] = useState(false);
  const [edit7, setEdit7] = useState(false);
  const [edit8, setEdit8] = useState(false);
  const [edit9, setEdit9] = useState(false);

  const [market, setMarket] = useState([]);

  const [EditListCrypto, setEditListCrypto] = useState();

  const [crypto1,setCrypto1] = useState();
  const [crypto2,setCrypto2] = useState();
  const [crypto3,setCrypto3] = useState();
  const [crypto4,setCrypto4] = useState();
  const [crypto5,setCrypto5] = useState();
  const [crypto6,setCrypto6] = useState();
  const [crypto7,setCrypto7] = useState();
  const [crypto8,setCrypto8] = useState();
  const [crypto9,setCrypto9] = useState();

  const editCrypto1 = () => {
    setEdit(!edit)  
    edit &&sendCrypto()
     console.log(crypto1)
    }
  const setSearchcrypto1 = (value) =>{
      setCrypto1(value)
      console.log(crypto1)
    }

const editCrypto2 = () => {
    setEdit2(!edit2)
    edit2 &&sendCrypto()
 }
 const setSearchcrypto2 = (value) =>{
  setCrypto2(value)
}

 const editCrypto3 = () => {
  setEdit3(!edit3)  
  edit3 &&sendCrypto()
}
const setSearchcrypto3 = (value) =>{
  setCrypto3(value)
}

const editCrypto4 = () => {
  setEdit4(!edit4)  
  edit4 &&sendCrypto()
}
const setSearchcrypto4 = (value) =>{
  setCrypto4(value)
}

const editCrypto5 = () => {
  setEdit5(!edit5)  
  edit5 &&sendCrypto()
}
const setSearchcrypto5 = (value) =>{
  setCrypto5(value)
}

const editCrypto6 = () => {
  setEdit6(!edit6)  
  edit6 &&sendCrypto()
}
const setSearchcrypto6 = (value) =>{
  setCrypto6(value)
}

const editCrypto7 = () => {
  setEdit7(!edit7) 
  edit7 &&sendCrypto() 
}
const setSearchcrypto7 = (value) =>{
  setCrypto7(value)
}
const editCrypto8 = () => {
  setEdit8(!edit8)  
  edit8 &&sendCrypto() 
}
const setSearchcrypto8 = (value) =>{
  setCrypto8(value)
}

const editCrypto9 = () => {
  setEdit9(!edit9)  
  edit9 &&sendCrypto() 
}
const setSearchcrypto9 = (value) =>{
  setCrypto9(value)
}
  function getCrypto() {

    getMarkets().then(response => 
      Object.keys(response.data).map((key, index) => {
        return (
          market.push()
        );
      }
      ))
      
    getCryptoFav().then(response =>
      setCrypto1(response.data[0].pair)+
      setCrypto2(response.data[1].pair)+
      setCrypto3(response.data[2].pair)+
      setCrypto4(response.data[3].pair)+
      setCrypto5(response.data[4].pair)+
      setCrypto6(response.data[5].pair)+
      setCrypto7(response.data[6].pair)+
      setCrypto8(response.data[7].pair)+
      setCrypto9(response.data[8].pair)
    )
  }
  function sendCrypto (){
    let cryptoList =[{"pair":crypto1},{"pair":crypto2},{"pair":crypto3},{"pair":crypto4},{"pair":crypto5},{"pair":crypto6},{"pair":crypto7},{"pair":crypto8},{"pair":crypto9}] 
    console.log(addCrypto(cryptoList))
  }
  
  useEffect(() => {
    getCrypto()
  }, []);
  return (
    <>
    <div className='container_CardAdmin2'>
        <div className="row_profil">
        {edit ? 
            <>
            
                <SearchBar setSearchcrypto1={setSearchcrypto1}/>
                <BiCheck  onClick={editCrypto1} size="2em" className="icons_crypto"/> 
            </> 
            :
            <> 
             <div className="input_row_profil"> {crypto1}</div> <BiEdit  onClick={editCrypto1} size="1.5em" className="icons_profil"/> 
             </> 
            }          
        </div>

        <div className="row_profil">
        {edit2 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto2}/>
            <BiCheck  onClick={editCrypto2} size="1.5em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto2}</div> <BiEdit  onClick={editCrypto2} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil">
        {edit3 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto3}/>
            <BiCheck  onClick={editCrypto3} size="1.5em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto3}</div> <BiEdit  onClick={editCrypto3} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil">
        {edit4 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto4}/>
            <BiCheck  onClick={editCrypto4} size="1.5em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto4}</div> <BiEdit  onClick={editCrypto4} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil">
        {edit5 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto5}/>
            <BiCheck  onClick={editCrypto5} size="1.5em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto5}</div> <BiEdit  onClick={editCrypto5} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil" >
        {edit6 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto6}/>
            <BiCheck  onClick={editCrypto6} size="1.6em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto6}</div> <BiEdit  onClick={editCrypto6} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil">
        {edit7 ? 
            <>
             <SearchBar setSearchcrypto1={setSearchcrypto7}/>
            <BiCheck  onClick={editCrypto7} size="1.7em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto7}</div> <BiEdit  onClick={editCrypto7} size="1.5em" className="icons_profil"/></> 
            }          
        </div>
        

        <div className="row_profil" >
        {edit8 ? 
            <>
            <SearchBar setSearchcrypto1={setSearchcrypto8}/>
            <BiCheck  onClick={editCrypto8} size="1.8em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto8}</div> <BiEdit  onClick={editCrypto8} size="1.5em" className="icons_profil"/></> 
            }          
        </div>

        <div className="row_profil">
        {edit9 ? 
            <>
            
            <SearchBar setSearchcrypto1={setSearchcrypto9}/>
            <BiCheck  onClick={editCrypto9} size="1.9em" className="icons_crypto"/></> 
            :
            <> <div className="input_row_profil"> {crypto9}</div> <BiEdit  onClick={editCrypto9} size="1.5em" className="icons_profil"/></> 
            }          
        </div>
      </div>
    </>
  ); }


export default CardListCrypto;
