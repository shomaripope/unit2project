const express = require('express');
const app = express();
const router = require('./routes/index');
const methodOverride = require('method-override');

app.use('/', router)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

