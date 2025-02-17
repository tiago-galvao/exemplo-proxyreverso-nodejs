import express from 'express';
import externalApi from './src/services/externalApi.js';
const app = express();


app.get('/ok', (req, res) => {
    res.send('API rodando');
});

// GET com query parameters
app.get('/consulta', async (req, res) => {
  try {
    // req.query já contém os query parameters
    const dados = await externalApi.getDataWithParams(req.query);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao processar requisição',
      message: error.message 
    });
  }
});

// POST com body
app.post('/dados', async (req, res) => {
  try {
    const dados = await externalApi.postData(req.body);
    res.json(dados);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao processar requisição',
      message: error.message 
    });
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} no ambiente ${process.env.NODE_ENV || 'development'}`);
});