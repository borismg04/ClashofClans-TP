import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
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

  // const filteredClans = (searchFilter: string) => {
  //   let resultSearch = clans.items.filter((clan: Item) => {
  //     if(clan.name.toLowerCase().includes(searchFilter.toLowerCase())
  //     || clan.tag.toLowerCase().includes(searchFilter.toLowerCase())
  //     || clan.warFrequency.toLowerCase().includes(searchFilter.toLowerCase())
  //     ){
  //       return clan;
  //     }
  //   });
  //   return resultSearch;
  // }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({...search,value:e.target.value});
  }

  return (
    <>
      <div>
        <select
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
          className=' form-control-lg mb-4 bg-white w-50 center'
          type="text"
          value={search.value}
          placeholder="Search...(Clans Name or Tag Name or War Frequency)"
          onChange={handleSearch}
          />
      </div>

      <div className='table-responsive shadow-lg p-3 mb-5 bg-body rounded'>
        <table className='table table-sm table-bordered'>
          <thead>
            <th>After</th>
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

