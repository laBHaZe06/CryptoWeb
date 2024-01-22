import { useEffect, useState } from "react";
import '../../assets/css/search.css';
import http from '../../service/api_call';

export default function Search(props) {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    props.setSearchcrypto1(searchTerm)
  };
  
  useEffect(() => {
    const fetchDatas = async () => {
      const tmp = await http.get('/crypto/markets');
      if (tmp.status === 200)
        setDatas(tmp.data);
    } 
    fetchDatas();   
  }, [])
 

  if  (datas === null || datas === undefined ||datas === [])
    return (<div></div>);

  return (
    <>
      <div className="search-inner">
          <form>            
            <input type="text" className='input-search' value={value} onChange={onChange} />
              {/* <button className='btn-search' onClick={() => onSearch(value)}><i class="fa-solid fa-magnifying-glass"></i></button> */}
          </form>
        </div>
        <div className="dropdown">
          {datas
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.pair.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.pair)}
                className="dropdown-row"
                key={item.pair}
              >
                {item.pair}
              </div>
            ))}
        </div>
    </>
  );
}

