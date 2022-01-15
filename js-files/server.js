const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    const {pathname,query} = url.parse(request.url,true);
    request.url=pathname;
    request.query=query;
    console.log(request.url,request.pathname);
    if(request.url=='/homepage'&&request.method=='GET'){
        const page = fs.createReadStream('public/index.html');
        page.pipe(response);
        return;
    }
    
})
server.listen(3000,msg=>console.log('the server is listening...'))