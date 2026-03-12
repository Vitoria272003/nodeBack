const express = require("")
const app = express.Router()
app.use(express.json())
//rotas
app.get("/usuario", () => {})

app.get("/usuario/:id", () => {})

app.post("/usuario", () => {})

app.put("/usuario/:id", () => {})

app.delete("/usuario/:id", () => {})


module.exports = app