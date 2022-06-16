import React from 'react'
import { ReactNode } from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { BadgeUrls ,ClansOfClan,IconUrls,Item,Label,Location,WarLeague,map } from "./Types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FormularioClan = () => {

  const [clanes, setClanes] = useState([]);
  const [tablaClanes, setTablaClanes] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(()=>{
    const options = {
      method: 'GET',
      url:'http://localhost:8080/',
    }
    axios.request(options).then(res=>{
      console.log(res.data);
      setClanes(res.data);
      setTablaClanes(res.data);
      }).catch(err=>{
        console.log(err);
      })
  },[])

  // const peticionApi = async () => {
  //   await axios.get('http://localhost:8080/').then(res => {
  //     console.log(res.data);
  //   }).catch(err => {
  //   console.log(err);
  //   })
  // }

  // useEffect(() => {
  //   peticionApi();
  // }, [])

  return (
    <>
      <div>
        <input 
          type="text" 
          value={busqueda}
          placeholder="Buscar..." 
          onChange={(e) => setBusqueda(e.target.value)} 
          />

        <button className="btn btn-succes">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='table-responsive'>
        <table className='table table-sm table-bordered'>
          <thead>
            <th>Tag</th>
            <th>Clan Name</th>
            <th>Badge</th>
            <th>Level Clan</th>
            <th>Frequency War</th>
            <th>Wins</th>
          </thead>

          <tbody>
            {/* {clanes && clanes.map(clan=>{
              return(
                <tr key={clan.items.tag}>
                  <td>{clan.items.tag}</td>
                  <td>{clan.items.name}</td>
                  <td><img src={clan.items.badgeUrls} alt='badge'></img></td>
                  <td>{clan.items.clanLevel}</td>
                  <td>{clan.items.warFrequency}</td>
                  <td>{clan.items.warsWins}</td>
                </tr>
              )
            }
            )} */}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default FormularioClan

