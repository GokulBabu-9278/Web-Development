import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const exp = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

exp.use((req, res, next)=>{
    console.log('START')
    next()
})
exp.use(express.json())
exp.use(express.urlencoded())

exp.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('GETTING DATA')
})

exp.post('/signup',(req, res)=>{
    res.send('signup success')
    var d = req.body
    console.log(d)
})
exp.use((req, res)=>console.log('END'))
exp.listen(8800,()=>console.log('SERVER LIVE...'))