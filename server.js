const  express = require('express');
const app= express();
const articleRouter = require('./routes/article');
const { db,todos } = require('./db')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))
  //now every route is created at the end of /article/...
  app.use('/article',articleRouter);
  const task= [{
    Title: ' Task 1',
    Description: 'Do Coding',
    DueDate: new Date,
    Status: 'Complete',
    Priority: 'Medium',
    Notes: 'Hi , Do Coding EveryDay'
},
{
    Title: 'Task 2',
    Description: 'Do Coding',
    DueDate: new Date,
    Status: 'Complete',
    Priority: 'Medium',
    Notes: 'Hi , Do Coding EveryDay'
}]
app.get('/',(req,res) =>
{
    res.render('articles/index',{ task: task });
})
db.sync().then(() => {
    app.listen(3000)
}).catch((err) => {
    console.error(err)
})



