const express = require('express');
const auth = require('./middleware/auth');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const api = require('./routes/api');
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(cookieParser());

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}`);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });
