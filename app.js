const express = require("express")

let app = express()

/* Ejemplo de uso, localhost:8081/imagen1.jpg */
app.use(express.static("public")) /* Donde primero mira la app por cosas */

app.listen(8081, () => {
    console.log("Server in 8081")
})

