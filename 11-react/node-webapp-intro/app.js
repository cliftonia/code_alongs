const http = require("http"); // gem / module - built in module - node api

//call back fn
// fn signature

// purpose is to generate a resoponse
// fn signature (request, response)
const handleRequest = function(request, response) {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome Home");
    response.end();
  } else if (request.url === "/about") {
    response.write("about runCMD");
    response.end();
  } else {
    response.write("error");
    response.end();
  }
};

const server = http.createServer(handleRequest);
server.listen(8000);

// url protocol + http method + domain + port + path
// http://localhost:8000/
