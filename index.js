const express = require('express');
const routes = require('./routes');
const HOSTNAME = 'localhost';
const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀🗜  @ http://${HOSTNAME}:${PORT}/`);
});
