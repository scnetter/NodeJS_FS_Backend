const http = require("http");

// App is the request listener using Express
// The listener handles requests and sends them to the appropriate router
const app = require("./app/app");
require('dotenv').config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});