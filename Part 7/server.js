/*
import http from 'http'
import fs from 'fs';

http.createServer(function (req, res){
    if(req.url==='/'){
    fs.readFile('form.html', function (err, data){
        
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}else if (req.url==='/login'){
    res.write('login')
    res.end()
}else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}
}).listen(8989,()=>console.log('Server is Live.....'))
*/

import http from 'http'
import fs from 'fs'
import url from 'url'

http.createServer((req, res)=>{

    var q = url.parse(req.url, true)
    console.log(q.pathname)

    if(q.pathname==='/'){
    fs.readFile('form.html', (err,data1)=>{
        res.writeHead(200, {'Content-Text':'text/html'})
        res.write(data1)
        res.end()
    })
    }else if(q.pathname==='/signup'){
        fs.readFile('form.html',(err,data2)=>{
            res.writeHead(200,{'Content-Text':'text/html'})
            res.write(data2)
            res.end()
        })
    }else if(q.pathname==='/signupaction'){

        console.log(q.query)
        console.log(q.query.fullname)


        res.writeHead(200,{'Content-Text':'text/html'})
        res.write('<h1>'+q.query.email+'</h1>'+'Login Success')
        res.end()
    }else{
        res.writeHead(404,{'Content-Text':'text/html'})
        res.write('error')
        res.end()
    }
}).listen(8080, ()=>console.log('Server is Live......'))