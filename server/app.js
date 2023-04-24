const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const api = require('./routes/api');
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}`);
});
