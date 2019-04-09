const express = require('express');
const path = require('path');

const app = express();
const port = 2270;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {console.log(`Server is running at port ${port}`)});