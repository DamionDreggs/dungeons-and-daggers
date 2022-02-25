const express = require('express')

const app = new express()

app.get('/', (req, res) => {

    res.send('hello world')

})

app.listen(process.env.PORT || 3000)