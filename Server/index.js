const express=require ('express');
const app=express()
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.json());
const PostRouter= require ('./Routes/Posts')
app.use('/posts',PostRouter)
const db=require('./models')

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });

app.use(PostRouter);
