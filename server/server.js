'use strict';

const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;

require(`./middleware.js`)(app, express);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
