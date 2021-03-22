

const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

//Configurations

app.set('port',3000);
app.set('json spaces',2)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//paths
app.use('/api/pedidos',require('./routes/routes'));

//Server Initializer 

app.listen(app.get('port'));
console.log("mi primer servidor");