const express = require('express');
const { app } = require('./express');

require('./api/students');
require('./api/evaluators');
require('./api/projects');
require('./api/notes');

app.use('/', express.static(__dirname + '/doc'));