const http = require('http')
const visits = new Map()
const server = http.createServer((request,result) =>{
    const count = (visits.get(request.url)||0) + 1
    visits.set(request.url, count)    
    result.end(`site\'s opened :${count}`)
})
const PORT = 8000
server.listen(PORT,()=>{console.log(`Server listening: http://localhost:${PORT}`);});