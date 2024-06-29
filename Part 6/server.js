/*
import http from 'http';

http.createServer(server).listen(8989)

function server(req,res){
    res.write('Local Server connected')
    res.end()
}
*/
import http from 'http';

http.createServer(function(req, res){
    res.write('Local Server connected')
    res.end()
}).listen(8989)