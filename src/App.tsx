import React from 'react';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import dotenv from 'dotenv';


function App() {

  const [clan,setClan] = useState([]);

  // const apiKey="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNiZTc5N2RmLTIyNDctNDZiMC05ZWFmLTMxZGQ3NWI4MTNhMSIsImlhdCI6MTY1NTI0MTA5MCwic3ViIjoiZGV2ZWxvcGVyLzI5ZmZmYjI3LTFmMmYtODIzNi03YTAwLWFhMzVjMTE3NGQ3MCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNTUuMTE1LjI4Il0sInR5cGUiOiJjbGllbnQifV19.YiiFlU1ERDvRNbxEn_J7k01Apzj8DWXg53ih3kBnroobJRC9iWCPkkV8_EjW8pap0hIfL3hHSQD1-yzmLia0Qw";

  const peticionAPI = async () => {
    console.log("entro");
    console.log(process.env.REACT_BASE_CLASH_OF_CLANS);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNiZTc5N2RmLTIyNDctNDZiMC05ZWFmLTMxZGQ3NWI4MTNhMSIsImlhdCI6MTY1NTI0MTA5MCwic3ViIjoiZGV2ZWxvcGVyLzI5ZmZmYjI3LTFmMmYtODIzNi03YTAwLWFhMzVjMTE3NGQ3MCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNTUuMTE1LjI4Il0sInR5cGUiOiJjbGllbnQifV19.YiiFlU1ERDvRNbxEn_J7k01Apzj8DWXg53ih3kBnroobJRC9iWCPkkV8_EjW8pap0hIfL3hHSQD1-yzmLia0Qw`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS"
    }
    fetch("https://api.clashofclans.com/v1/clans?name=guard", { headers})
    .then(response =>
      {
            response.json();
            console.log(response);
          })

      // useEffect (() => {
      // //   const options = {
      // //     method: 'GET',
      // //     url: "https://api.clashofclans.com/v1/clans?name",
      // //     headers: {
      // //       'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      // //       'Accept': 'application/json',
      // //     }
      // //   };
      // //   console.log(options);
      // // }, [])
      //   // GET request using fetch with set headers
      // }, [])
  }
  console.log(process.env.REACT_BASE_CLASH_OF_CLANS);
  useEffect(() => {
    peticionAPI();
  })

  return (
    <div className="App">
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
