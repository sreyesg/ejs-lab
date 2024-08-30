const express = require('express')
const app = express()

// home route
app.get('/', (req, res) => {
    res.send('hello there!')
})

app.listen(3000)