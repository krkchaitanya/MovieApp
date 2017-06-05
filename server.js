const express=require("express");
const hbs=require("hbs");
const fs=require("fs");
const bodyParser=require("body-parser");



var booksdata=fs.readFileSync("books.json");
var books=JSON.parse(booksdata);


var app=express();
app.use(bodyParser.json());
app.set("view engine","hbs");
var port=process.env.PORT||3000;
app.use(express.static(__dirname+"/index"));




app.get("/bookone",(req,res)=>{

res.render("index.hbs",{
  chai:books[0].book,
  des:books[0].description,
  img:books[0].image

});

});


app.get("/booktwo",(req,res)=>{

res.render("book2.hbs",{
  chai:books[1].book,
  des:books[1].description,
  img:books[1].image

});

});


app.get("/bookthree",(req,res)=>{

res.render("book3.hbs",{
  chai:books[2].book,
  des:books[2].description,
  img:books[2].image

});

});

app.get("/hobbitone",(req,res)=>{

res.render("hobbit1.hbs",{
  chai:books[3].book,
  des:books[3].description,
  img:books[3].image

});

});
app.get("/hobbittwo",(req,res)=>{

res.render("hobbit2.hbs",{
  chai:books[4].book,
  des:books[4].description,
  img:books[4].image

});

});
app.get("/hobbitthree",(req,res)=>{

res.render("hobbit3.hbs",{
  chai:books[5].book,
  des:books[5].description,
  img:books[5].image

});

});

app.listen(port,()=>{
  console.log(`app is running on port ${port}`);
});
