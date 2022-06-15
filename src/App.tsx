import React from 'react';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';


function App() {

  const [clan,setClan] = useState([]);

  const apiKey="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNiZTc5N2RmLTIyNDctNDZiMC05ZWFmLTMxZGQ3NWI4MTNhMSIsImlhdCI6MTY1NTI0MTA5MCwic3ViIjoiZGV2ZWxvcGVyLzI5ZmZmYjI3LTFmMmYtODIzNi03YTAwLWFhMzVjMTE3NGQ3MCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNTUuMTE1LjI4Il0sInR5cGUiOiJjbGllbnQifV19.YiiFlU1ERDvRNbxEn_J7k01Apzj8DWXg53ih3kBnroobJRC9iWCPkkV8_EjW8pap0hIfL3hHSQD1-yzmLia0Qw";

  const peticionAPI = async () => {
    await axios.get(`https://api.clashofclans.com/v1/clans`).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    }
    );
  }

  useEffect(() => {
    peticionAPI();
  }, [])

  return (
    <div className="App">
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
