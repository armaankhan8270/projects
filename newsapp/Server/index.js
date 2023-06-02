const express=require ('express');
const app=express()
const cors=require('cors')
app.use(express.json());

const db=require("./models")
// const PostRouter=require('./routes/Posts')/
// app.use(express.json())
app.use(cors())
const quoteRouter=require("./routes/Quote")
app.use("/quotess",quoteRouter)
// app.use('/posts',PostRouter)



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });

