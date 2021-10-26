const express = require('express')
const path =require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
accessToken: '609b8b65d5b343dab85254d8fc35d28a',
captureUncaught: true,
captureUnhandledRejections: true
})

const app = express()
app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

let students = []

app.post('/api/student', (req,res) => {
    let {name} = req.body
    name = name.trim()

    students.push(names)
    rollbar.log('Students added sccessfully', {author: 'Antonio', type: 'manual entry'})
    res.status(200).send(students)
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, () => console.log (`Take us to warp ${port}!`))