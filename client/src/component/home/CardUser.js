import React , { useEffect, useState } from 'react';
import '../../assets/css/style.css';
import {getUser} from '../../service/call_api/user_service';


function CardUsers(props) {
  
  const [data, setData] = useState([]);
    useEffect(() => {
      getUser()
        .then((resp) => {
          if (data.length == 0) {
            setData(resp.data);
            console.log(resp.data);
          }
         
        })
      });

  return (
    <div className='container_CardUsers'>
    <table>
      <div className='container_Username-Email'>  
      <thead>
        <td>
          <div className='username-email' id="style-1">
          <h4>Utilisateurs</h4>
          <div className="tabUser">

            {data.map(item => (
              <div className='tabUserRow'>
              <div className='userRow'>{item.id} </div>
              <div key={item.id} className='userRow'>{item.username}</div>
              <div className='userRow'>{item.email} </div>
              </div>
            ))}
            </div>

{/* 
          <h4>Email</h4>
            {data.map(item => (
            ))} */}
          </div>
        </td>
      </thead>
      </div>
    </table>

    </div>
  )
}

export default CardUsers;