# Hasura-fellowship-task
Description : HASURA FELLOWSHIP TASKS
Program Name : index.js 
Platform : Node js Express
Programmer Name : ABHINAV ANAND
Genric Note : Local Host running on Port 3000 
Dependencies : All required module should be imported through npm

1.Install Node software (in windows/linux/any operating system supporting node). Refer to https://nodejs.org

2.Open Terminal/command promt

3.Create a folder for your project and execute command npm init in that folder.

4.Clone this GIT folder completely into your local system

5.As per package.json, install all the libraries using command: npm install --save . Example: npm install �save express

6.Step 5 may not be required as the subfolder node_modules in my package has all dependencies but just ensure integrity is maintained.

7.Now read thru Dependencies and Detailed notes on tips to execute index.js.

8.Once all set, execute the index.js using any of the below commands: a.	npm start (this needs the main program to be only named index.js unless you overwrite in package.json file (refer to npm documentation on how to update). b.	node index.js

9.Once the server starts running, go to any browser (chrome, IE, etc...) and enter any of the below URL to verify the server has started running.
    a.	http://localhost:3000 (in case you have changed port, use that instead of 5000).
    b.	http://127.0.0.1:3000

If step 9 works, then you can try any link mentioned in "Detailed notes" as per task required.

Detailed notes: This repo is created for doing HPDF Week1 tasks. The following tasks are performed as part of Hasura HPDF Weekly Tasks.

WEEK 1:

A simple hello-world at "/" that displays a simple string "Hello World - "; replace firstName with your own first name.

Route "/authors" does below a.	Fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users b.	Fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts c.	Respond with only a list of authors and the count of their posts (a newline for each author).

Set a simple cookie (if it has not already been set) at http://localhost:5000/setcookie with the following values: name= and age=.

Fetch the set cookie with http://localhost:5000/getcookies and display the stored key-values in it.

Deny requests to your http://localhost:5000/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed).

Render an HTML page at http://localhost:5000/html or an image at http://localhost:5000/image.

A text box at http://localhost:5000/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.
