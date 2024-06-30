import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use((req, res, next)=> {
    console.log('start')
    next()
})
app.use(express.json())
app.use(express.urlencoded())
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname,'form.html'))
    console.log('form_get')
})
app.post('/signup', (req, res, next)=> {
    res.send('account created')
    var data = req.body
    console.log(data)
    console.log(data.fullname)
    next()
})
app.use((req, res)=>{
    console.log('end')
})
app.listen(8989, ()=> console.log('Server Live...'))