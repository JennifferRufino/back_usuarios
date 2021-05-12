require('dotenv').config();

const express =require('express');
const cors = require('cors');
const app = require('./server');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);