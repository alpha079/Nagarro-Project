const  express = require('express');
const app= express();
const articleRouter = require('./routes/article');

app.set('view engine','ejs')
app.use('/article',articleRouter)  //now every route is created at the end of /article/...

const articles= [{
    Title: 'Test Task',
    Description: 'Do Coding',
    DueDate: new Date,
    Status: 'Complete',
    Priority: 'Medium',
    Notes: 'Hi , Do Coding EveryDay'
},
{
    Title: 'Test Task 2',
    Description: 'Do Coding',
    DueDate: new Date,
    Status: 'Complete',
    Priority: 'Medium',
    Notes: 'Hi , Do Coding EveryDay'
}]
app.get('/',(req,res) =>
{
    res.render('articles/index',{ articles: articles });
})

app.listen(5000);