const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/enviarFormulario', async (req, res) => {
  const email = req.body.fldVhfn3SbtLgHaJa; // ID de campo para Email
  const mensaje = req.body.fldPYutyP0yvWs5WD; // ID de campo para Mensaje

  // ID de la tabla de Contacto
  const airtableTableId = 'tblTNuOnRXGRnQP3K';
  const airtableWebhookUrl = `https://api.airtable.com/v0/appXXXXXXXXX/${airtableTableId}`;
  const airtableToken = 'tu_token_de_acceso';

  const datos = {
    fields: {
      "fldVhfn3SbtLgHaJa": email,
      "fldPYutyP0yvWs5WD": mensaje
    }
  };

  try {
    const response = await fetch(airtableWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${airtableToken}`
      },
      body: JSON.stringify(datos)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el formulario' });
  }
});

app.listen(PORT, () => console.log
