import http from "http";
import env from "dotenv";

// Load environment variables
env.config({ path: "./.env" });

const port = process.env.PORT || 5500;
const hostname = process.env.HOSTNAME;

var origin = [process.env.LOCALHOST, process.env.SECONDHOST]

// 🟢 HTTP Server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "application/json",
        "access-control-allow-origin": origin // cors 
    })
    res.end(JSON.stringify({
        data: "Server is working"       
    }));
});


// 🟢 Start server
server.listen(port, hostname, (err) => {
    if (err) console.error(`Error: ${err}`);
    console.log(`Server is listening at ${hostname}:${port}...`);
});
