import React , { useEffect, useState } from 'react';
import {getActu} from '../../service/call_api/rss_service';
import '../../assets/css/style.css';
import ReactLoading from 'react-loading';

const NewsActu = () => {

  const [ActuTab, setActuTab] = useState();
  const [dateFr, setDateFr] = useState();

  function createActu() {
    getActu().then(response => setActuTab(
      Object.keys(response.data).map((key, index) => {
        const date = new Date(response.data[key].date);
        const formatted = date.toLocaleDateString("fr-FR")
        return (
          <div key={index} className="container_Card_News">
            <a href={response.data[key].link} target="_blank" className="card_News_Link">{response.data[key].title}</a>
            <br></br>
            {formatted}
            <hr />
          </div>
        );
      }))
    );

  }
  
  useEffect(() => {
    createActu()
  }, []);
  
  if(!ActuTab){
    return(
      <div className="container_loading">
        <ReactLoading type="spin"color='#92d1fd' className="size_load" height={500} />
      </div>
    )
  }
  return (
    <>
        <div>
          {ActuTab}
      </div>
    </>
  ); }

export default NewsActu;