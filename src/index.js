const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/index');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

const API_URL = process.env.API_URL || `http://localhost:${PORT}`;
const ApiEndpoints = ['/contacts', '/contacts/:id'];

app.get('/', (_req, res) => {
  res.json({
    message: `Welcome to the Blog QUEMADOS MID see our docs at ${API_URL}/api/docs`,
    endpoints: ApiEndpoints.map(endpoint => `${API_URL}/api${endpoint}`)
  });
});

app.use('/api', contactRoutes);

mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log('Error de conexión a MongoDB:',error));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
