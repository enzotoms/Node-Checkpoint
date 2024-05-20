// NUMBER ONE
//  In this task, you will:
// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console

console.log('HELLO-WORLD!');



// NUMBER TWO
/* In this task, you will:
create a server  
Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000 */
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
    });
    server.listen(3000);
    console.log(`Server running at http://localhost:3000`);



    // NUMBER THREE
    const fs = require('fs');

    const content = "Hello Node";
    
    fs.writeFile('welcome.txt', content, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("File 'welcome.txt' created successfully!");
      }
    });
    