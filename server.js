const http = require('http');
const fs = require('fs');
const url = require('url');
// const querystring = require('querystring');

const app = http.createServer((req, res) => {
  /* URL */
  let reqUrl = url.parse(req.url);
  console.log(reqUrl.pathname);

  switch (reqUrl.pathname) {
    case '/':
      res.writeHead(202, {
          'Content-Type': 'text/html'
      });

      fs.readFile('./views/home/index.html', function read(err, data) {
          if (err) {
              console.log('some error');
              return;
          }

          res.write(data);
          res.end();
      })
      break;
    case '/addCat':
      res.writeHead(202, {
          'Content-Type': 'text/html'
      });

      fs.readFile('./views/addCat.html', function read(err, data) {
          if (err) {
              console.log('some error');
              return;
          }

          res.write(data);
          res.end();
      })
      break;
    case '/addBreed':
      res.writeHead(202, {
          'Content-Type': 'text/html'
      });

      fs.readFile('./views/addBreed.html', function read(err, data) {
          if (err) {
              console.log('some error');
              return;
          }

          res.write(data);
          res.end();
      })
      break;
    case '/catShelter':
      res.writeHead(202, {
          'Content-Type': 'text/html'
      });

      fs.readFile('./views/catShelter.html', function read(err, data) {
          if (err) {
              console.log('some error');
              return;
          }

          res.write(data);
          res.end();
      })
      break;
    case '/editCat':
      res.writeHead(202, {
          'Content-Type': 'text/html'
      });

      fs.readFile('./views/editCat.html', function read(err, data) {
          if (err) {
              console.log('some error');
              return;
          }

          res.write(data);
          res.end();
      })
      break;
  }
});

app.listen(5000, () => console.log('Server is listening to port 5000'))