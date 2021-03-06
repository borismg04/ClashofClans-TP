import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import images from '../assests/images';
import { ClansOfClan } from "./Types";

const TableClan = () => {

  const [clans, setClans] =useState<ClansOfClan>({items:[]});
  const [tableClans, setTableClans] = useState([]);
  const [search, setSearch] = useState({filteredBy:"name",value:""});

  useEffect(()=>{

    let url= `http://localhost:8080/?${search.filteredBy}=${search.value}`;

    if(search.value == ""){
      url = `http://localhost:8080/`;
    }

    const options = {
      method: 'GET',
      url,
    }
    axios.request(options).then(res=>{
      setClans({items:res.data.items});
      setTableClans(res.data.items);
    }).catch(err=>{
      console.log(err);
    })
  },[ search.value ])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({...search,value:e.target.value});
  }

  return (
    <>
      <div>
        <div>
          <img
            className="max-width:20% height:auto "
            src={images.freeInfo}
            alt="logo" />
        </div>

          <select
            className="form-control-lg form-control-sm mb-4 w-30"
            value={search.filteredBy}
            onChange={(e) => {
              setSearch({ ...search, filteredBy: e.target.value });
            }}
          >
            <option value="name">Name</option>
            <option value="tag">Tag</option>
            <option value="warFrequency">Frequency War</option>
          </select>

        <input
          className=' form-control-lg mb-4 bg-white w-50 left'
          type="text"
          value={search.value}
          placeholder="Search...(Clans Name or Tag Name or War Frequency)"
          onChange={handleSearch}
          />
      </div>

      <div className='table-responsive shadow-lg p-3 mb-5 bg-body rounded'>
        <table className='table table-sm table-bordered'>
          <thead>
            <th>Tag</th>
            <th>Badge</th>
            <th>Clan Name</th>
            <th>Level Clan</th>
            <th>War Frequency</th>
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

