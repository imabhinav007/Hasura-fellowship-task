   /*
   Description   : HPDF Week1 tasks - built on nodejs express
   
   Name          :  ABHINAV ANAND
   
   generic note: ( localhost running at port 3000)

   Dependencies: all required libraries insalled through npm

   The following tasks are performed as part of Hasura HPDF Week1:
   
   1.  A simple hello-world at "/" that displays a simple string
     "Hello World - <firstName>"; replace firstName with your own first name.
   
   2.  Route "/authors" does below
       a.  fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
       b.  fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
       c.  Respond with only a list of authors and the count of their posts (a newline for each author).
   
   3.  Set a simple cookie (if it has not already been set) at http://localhost:5000/setcookie with the following values: name=<your-first-name> and age=<your-age>.

   4.  Fetch the set cookie with http://localhost:5000/getcookies and display the stored key-values in it.

   5.  Deny requests to your http://localhost:5000/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed)
   
   6.  Render an HTML page at http://localhost:5000/html or an image at http://localhost:5000/image.
   
   7.  A text box at http://localhost:5000/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.
   */

   // Importing express  and requires libraries
   
   var express      = require("express");
   var dateFormat   = require('dateformat');
   var cookieParser = require('cookie-parser');
   var fetch        = require('node-fetch');
   var tableify     = require('tableify');
   var bodyParser   = require("body-parser");
   var path         = require("path");
   var http         = require('http');
   var request      =require("request");
   fetch.Promise    = require('bluebird');
   var urlValue     = require('url')

   
   var app  = express();
   app.use(cookieParser());
   app.use(bodyParser.urlencoded({ extended: false }));
   var datestamp;
   var now;
   
   function methodTime(link)
   {
   now = new Date();
   datestamp = dateFormat(now, "dd-mm-yyyy h:MM:ss TT")
   console.log('Get method executed for ' + link + ' page at : '+ datestamp)
   }
 
   // Task1 - To print hello world followed by name

   app.get('/',function(req,res){
   res.send('Hello World - Abhinav')
   });

   //End of Task 1

   /* Task2 - To get all author details from users URL and posts from posts URL
               and to display the no. of posts each author got */
   
   app.get('/authors',function readUrl(req0,res0){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(function(res) {return res.json();})
   .then(function(authJSON){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(function(res) {return res.json();})
   .then(function(postJSON){
   var postCount = 0;
   var authHolder = {'toWrite' : []};
   for (var i = 0; i < authJSON.length; i++)
   {
   for (var j = 0; j < postJSON.length; j++)
   {
    if (authJSON[i].id == postJSON[j].userId)
    {
    postCount++;
    }
    }
    authHolder.toWrite.push({'Author Name': authJSON[i].name,
   'No. of Posts':postCount.toString()});
    postCount = 0;
    }
    var html = tableify(authHolder.toWrite);
    res0.send(html);
    methodTime('/authors');
    })
    })
    });

    // End of Task2

   // Task3 - //Task 3 - setcookie    - Seting cookie (if it has not already been set) with name and age.

   app.get('/setcookie', function(req,res) {
   res.cookie('name','abhinav',{ expires: new Date(Date.now() + 20000), httpOnly: false });
   res.cookie('age','20',{ expires: new Date(Date.now() + 40000), httpOnly: false });
   res.send('Cookies are set!');
   });

   // End of Task3
   
   //Task4 - Getting the cookie set in Task 3.

   app.get('/getcookie', function(req,res){
   var cookie = req.cookies;
   res.send(cookie);
   });

   // End of Task4

   // Task5 - Deny requests to your http://localhost:8080/robots.txt page
   
    app.get('/robots.txt', function (req, res) {
  res.type('text/html');
  res.redirect('http://httpbin.org/deny');
  }); 

  // End of Task5

  // Task6 - Render an HTML page at http://localhost:8080/html
  
  app.get('/html',function(req,res){
  res.sendFile(__dirname + '/page.html');
  }); 

  // render image at http://localhost:8080/image
  
  app.get('/image', function (req, res) {
  res.sendFile(path.join(__dirname,'abi.jpg'));
  });
   

   // End of Task6

   // Task7 - A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice.

    app.get('/input',function(req,res){
    res.sendFile(__dirname + '/index.html');
    });
    app.post('/login',function(req,res){
    var msg1=req.body.msg;
    console.log("Sent data from post request = "+msg1);
    res.end("yes");
    });


   
   app.get('/html',function(req,res){
   res.sendFile(__dirname + '/page.html');
   });

   //End of Task7
  
   

  // Express app at port mentioned 
  
  app.listen(3000,function(){
  console.log("Started on PORT 3000");
  });
  //End of Program