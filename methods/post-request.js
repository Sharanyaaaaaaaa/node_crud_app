const crypto = require("crypto");
const requestBodyparser = require("../util/body-parser");
module.exports = async (req, res) => {
    if(req.url === "/api/movies") {
        try {
            let body =  await requestBodyparser(req);
             body.id = crypto.randomUUID();
             req.movies.push(body);
             res.writeHead(201,{"Content-Type":"application/json"});
             res.end();
            console.log("Request Body:", body);
        } catch (err){
            console.log(err);
             res.writeHead(400,{"Content-Type":"application/json"});
        
            res.end(JSON.stringify({title:"Validation failed",message: "Request body is not valid"})
        );
        }
    }
};
