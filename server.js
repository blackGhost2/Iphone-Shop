import express from "express";
import dotenv from 'dotenv';

//load variables
dotenv.config();

//start server
const app = express();

app.use(express.static('public'));
app.use(express.json());


//home route 
app.get('/' , (req,res) => {
    res.sendFile('index.html' , {root : "public"});
});

app.get('/redirectToCheckout', (req, res) => {
    res.redirect('/Checkout.html');
  });





app.listen(3000 , () => {
    console.log("Server started on port 3000");
})