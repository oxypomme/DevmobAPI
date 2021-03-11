const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

require('./api/students').initRoutes(app, db);
require('./api/evaluators').initRoutes(app, db);
require('./api/projects').initRoutes(app, db);

app.listen(8080, () => {
    console.log("Server ready");
});