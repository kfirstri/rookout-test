const express = require('express')
const app = express()
const port = 3000

const rookout = require('rookout');

rookout.start({ token: '5cb047e401b00318adfa2bb2bd5fed752eba7239e3a77c0c51227e0b2a2369f2' });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))