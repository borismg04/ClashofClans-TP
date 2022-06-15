import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

console.log(process.env.BASE_CLASH_OF_CLANS);

app.listen(4000, () => {
  console.log('🚀 Servidor corriendo en el puerto 4000 🚀');
});
