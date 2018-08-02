const express = require('express');
const app = express();
require('./modules/db-connection');

const bodyParser = require('body-parser');

const taskRouter = require('./routes/task.route'); 
//router connection

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());


app.use('/tasks', taskRouter);
//router client connect

app.listen(PORT, () =>  {
    console.log(`listenin on PORT ${PORT}`);
});