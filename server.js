const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3006;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

