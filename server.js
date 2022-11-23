const express = require('express')
const rootRouter = require('./routers')
const {sequelize} = require('./models')
const path = require('path');


const app = express()
const port = 8000


//cài ứng dụng sử dụng kiểu json
app.use(express.json());

//static file
const publicPath = path.join(__dirname, 'public');
app.use("/public",express.static(publicPath));

//dùng router
app.use("/api/v1",rootRouter)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})