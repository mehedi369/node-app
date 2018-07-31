# node-app
Node.js app with express.js and ejs template library.

```
const express = require('express');
let app = express();

// For using static file in our project.
app.use(express.static('public'));

// For setting our view engine as ejs.
app.set("view engine","ejs");

// App will render index when client hit on root/index file
app.get('/', (req, res)=>{
  res.render("index");
});

// Client will redirected to the posts web-page 
app.get('/posts', (req, res)=>{
  let posts = [
    {title : "This is awesome 1", name : "Rahim" },
    {title : "This is awesome 2", name : "Karim" },
    {title : "This is awesome 3", name : "Jabbar" },
    {title : "This is awesome 4", name : "Abbas" }
  ];
  res.render("posts", {posts : posts});
});

app.listen(3000, ()=>{
  console.log("Boss your server is running on port: 3000");
});

```
