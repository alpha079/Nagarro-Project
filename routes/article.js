const  express = require('express');
const {db,todos} =require('./../db')
const router=express.Router();

router.get('/new',(req,res) => {
    res.render('articles/new');
})

router.get('/:id', (req,res) =>{

})
router.post('/new',async(req,res) => {
    let task= todos.Create({
        Title: req.body.title,
        Description: req.body.description,
        DueDate: req.body.dueDate,
        Status: req.body.status,
        Priority: req.body.priority ,
        Notes: req.body.comment
    })
     await task.save();
     
})
module.exports=router;


//try{
//    task=await task.save();
    //res.redirect(`/article/${task.id}`) 
//}catch(e){
//   res.render('articles/new',{ task: task });
//}