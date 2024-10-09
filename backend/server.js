const express = require('express');
const cors = require("cors");
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

sequelize.authenticate()
.then(()=> console.log('Database Connected Successfully'))
.catch((err)=> console.log('Error connecting to the database' , err))


// Sync database tables with models
const User = require('./models/User');
sequelize.sync({ force: false }) // Set force: true to drop and recreate tables
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database:', err));

app.get('/', (req, res)=>{
    res.send('API Running');
})



app.listen(5000, ()=>{
    console.log('Server started on port 5000');
})