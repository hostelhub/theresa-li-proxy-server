const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;

app.use('/hostels/:id', express.static(path.join(__dirname, 'public')));

app.get('/api/hostels/:id/photos', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3001/api/hostels/${id}/photos`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => {throw err})
});

app.get('/api/hostels/:id/calendar', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3002/api/hostels/${id}/calendar`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => {throw err})
});

app.get('/api/hostels/:id/reviews', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3003/api/hostels/${id}/reviews`)
    .then(response => (res.status(200).send(response.data)))
    .catch(err => {throw err})
});

app.listen(port, () => {console.log(`Server is running at port ${port}`)});
