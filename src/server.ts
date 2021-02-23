import express, { response } from 'express'
import { request } from 'http';

const app = express()

app.get("/", (request, response) => {
    return response.json({ message: "Pagina de Usuários!" })
})


app.post("/", (request, response) => {
    return response.json({ message: "Usuario Salvo!" })
})


app.listen(3333, () => console.log("Server is running!"));

