import http from 'http'; // import from my json file
import { URL } from 'url';

// Define my server port
const PORT = 3000;

// Create my server server
const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  // Handle root path
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to my homepage!</h1><p>This page my  first node.js.</p>');
  } 
  // my about page  path
  else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Me</h1><p>My name is Melkam Worku, and I am learning Node.js!</p>');
  }
  // Handle any other path as 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1><p>Sorry, we couldn’t find the page you were looking for.</p>');
  }
});

// Start my server server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
