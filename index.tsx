const PORT = 8080;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {

  let url=process.env.REACT_BASE_CLASH_OF_CLANS;

  const { tag,name,warFrequency } = req.query;

  if(tag){
    url = `${process.env.REACT_BASE_CLASH_OF_CLANS}?tag=${tag}`;
  }
  if(name){
    url = `${process.env.REACT_BASE_CLASH_OF_CLANS}?name=${name}`;
  }
  if(warFrequency){
    url = `${process.env.REACT_BASE_CLASH_OF_CLANS}?warFrequency=${warFrequency}`;
  }

  const options = {

    method: 'GET',
    url,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_KEY_CLASH_OF_CLANS}`,
    }
  };

  axios.request(options).then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`🚀🚀 Server is running on port ${PORT} 🚀🚀`);
});

