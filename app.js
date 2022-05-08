const express = require("express");
const servidorRouter = require("./routers/main");

const app = express()
const port = 3000;

app.use('/', servidorRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})