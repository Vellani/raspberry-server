const {express, app, io, server} = require('./requirements')
const index = require('./routes/index')

// static data
app.use(express.static('./resourses'))
app.use(express.urlencoded({extended:false}))

app.use('/', index)

server.listen(port = 8000, () => {
    console.log(`Listening on port ${port}...`)
})

