const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({helpers});



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('./public/'));
app.use(express.static("images"));
app.use(express.static("video"));
app.use(routes);
app.use(express.static('public'));
app.use(express.static('images'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));