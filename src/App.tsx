import React from 'react';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import FormularioClan from './components/FormularioClan';

function App() {

  // const [clan,setClan] = useState([]);

  // useEffect(()=>{

  //   const options = {
  //     method: 'GET',
  //     url:'http://localhost:8080/',
  //   }

  //   axios.request(options).then(res=>{
  //     console.log(res.data);
  //     setClan(res.data);
  //     }).catch(err=>{
  //       console.log(err);
  //     })
  // },[])

  return (
    <div className="App">
      <div>
        <button className="btn btn-primary">CLASH OF CLANS</button>
      </div>

      <div>
        <FormularioClan/>
      </div>


    </div>
  );
}

export default App;
