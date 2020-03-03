const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')


const app = express();

app.use(cors());

//body parser middleware
app.use(bodyParser.json());

const routes = require('./server/routes/routes')
routes(app)

//DB config
const db = require('./server/config/keys').mongoURI;

//connect to mongodb
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('mongo db connected.......'))
.catch(err => console.log(err));


if(process.env.NODE_ENV === 'production') {
    // app.use(express.static('client/build'));
    app.use(express.static(path.join(__dirname, '..client/build')));
    app.get('*', (req, res) => {
      // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
    })
  }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));