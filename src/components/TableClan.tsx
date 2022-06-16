import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BadgeUrls ,ClansOfClan,IconUrls,Item,Label,Location,WarLeague,map } from "./Types";

const TableClan = () => {

  const [clans, setClans] =useState<ClansOfClan>({items:[]});
  const [tableClans, setTablaClans] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{

    const options = {
      method: 'GET',
      url: `http://localhost:8080/?name=${setSearch}`,
    }

    axios.request(options).then(res=>{
      console.log(res.data);
      setClans({items:res.data.items});
      setTablaClans(res.data);
      }).catch(err=>{
        console.log(err);
      })
  },[])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filteredClans(e.target.value);
    console.log("Busqueda: "+e.target.value);
    console.log("Filtro: ",filteredClans(e.target.value));

  }

  const filteredClans = (searchFilter: string) => {
    let resultSearch = clans.items.filter((clan: Item) => {
      if(clan.name.toLowerCase().includes(searchFilter.toLowerCase())
      || clan.tag.toLowerCase().includes(searchFilter.toLowerCase())
      || clan.warFrequency.toLowerCase().includes(searchFilter.toLowerCase())
      ){
        return clan;
      }
    });
    return resultSearch;
  }

  return (
    <>
      <div>
        <input
          className=' form-control-lg'
          type="text"
          value={search}
          placeholder="Search...(Clans Name or Tag Name or Frequency War)"
          onChange={handleSearch}
          />

        <button className="btn btn-succes" >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='table-responsive'>
        <table className='table table-sm table-bordered'>
          <thead>
            <th>Tag</th>
            <th>Badge</th>
            <th>Clan Name</th>
            <th>Level Clan</th>
            <th>Frequency War</th>
            <th>Wins</th>
          </thead>

          <tbody>
            {clans && clans.items.map(clan=>{
              return(
                <tr key={clan.tag}>
                  <td>{clan.tag}</td>
                  <td><img src={clan.badgeUrls.small} alt={clan.name}/></td>
                  <td>{clan.name}</td>
                  <td>{clan.clanLevel}</td>
                  <td>{clan.warFrequency}</td>
                  <td>{clan.warWins}</td>
                </tr>
                )
            }
            )}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default TableClan
