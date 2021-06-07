

const { json } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configurations

app.set('port',3000);
app.set('json spaces',2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//paths
app.use('/api/pedidos',require('./routes/routes'));

//Server Initializer 

app.listen(app.get('port'));
console.log("mi primer servidor");