require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const PostRoutes = require('./routes/Post');
const UsuarioRoutes = require('./routes/Usuario');
const morgan = require('morgan');
const path = require('path');


// CONFIGURAÇÕES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


// ROTAS
app.use('/files', express.static(path.resolve(__dirname, "tmp/uploads")))
app.use('/post', PostRoutes);
app.use('/usuario', UsuarioRoutes);


app.listen(process.env.WEBSITES_PORT, function (err) {
    if (!err) {
        console.log("Running !");
    }
    else {
        console.log(err);
    }
});