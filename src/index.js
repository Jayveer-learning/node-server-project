import http from "http";
import env from "dotenv";

// Load environment variables
env.config({ path: "./.env" });

const port = process.env.PORT || 5500;
const hostname = process.env.HOSTNAME;

var origin = [process.env.LOCALHOST, process.env.SECONDHOST]

// 🟢 HTTP Server
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {
            "content-type": "application/json",
            "access-control-allow-origin": origin // cors 
        })
        res.end(JSON.stringify({
            data: "Server is working"       
        }));
    }else if(req.url === "/user"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end(`Hello Brother for you ${req.url}`);
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain')
        res.end("Invalid url");
    };
});


// 🟢 Start server
server.listen(port, hostname, (err) => {
    if (err) console.error(`Error: ${err}`);
    console.log(`Server is listening at ${hostname}:${port}...`);
});
