const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('✨ Hello Word, I am testing the express.js 💖'))

app.listen(port, () => console.log(`It's working on port ${port} ;3`))