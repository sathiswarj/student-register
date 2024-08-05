const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/userModel.js');

const app = express();
const PORT = 8001;

 
app.use(cors());
app.use(express.json());  

// app.use('/', (req, res) => {
//     res.send('don\'t give up');
// });

mongoose.connect('mongodb://localhost:27017/mark')
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log(err);
});

app.post('/mark', async (req, res) => {
    const { name, age, email, contact, institute, degree, year, course, instructor, duration} = req.body;
    console.log(name, age, email, contact);

    try {
        const newTodo = new User({ name, age, email, contact, institute, degree, year, course, instructor, duration });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

app.get('/mark', async(req,res) =>{
    try{
         const getTodo = await User.find();
         res.send(getTodo)
    }
    catch(err){
         console.log(err)
    }
})
app.get('/mark/:id', async(req,res) =>{

    try{
        const userId= req.params.id;
         const getTodo = await User.findById(userId);
         if(!getTodo){
           return res.status(404).send({message:'User not found'}) 
         }
         res.send(getTodo)
    }
    catch(err){
         console.log(err)
    res.status(500).send('Network issue')
        }
})

app.delete('/mark/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await User.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).send('Item not found');
      }
      res.status(200).send('Item deleted');
    } catch (err) {
      res.status(500).send(`Error deleting item: ${err.message}`);
    }
  });
  
  
app.put('/mark/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const result = await User.findByIdAndUpdate(id, updateData ,{new:true});
      if (!result) {
        return res.status(404).send('Item not found');
      }
      res.status(200).send('Item updated');
    } catch (err) {
      res.status(500).send(`Error update item: ${err.message}`);
    }
  });
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




