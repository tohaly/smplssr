import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {App} from '../client/app'
import {template} from "./template";
import * as path from "node:path";

const app = express()

app.get('/', (_, res) => {
    const reactHTML = renderToString(<App/>)
    const html = template.replace('{{root}}', reactHTML)


    res.status(200)
    res.send(html)
})


app.get('/static/*', (req, res) => {
    const staticPath = path.join(__dirname, req.path)

    res.sendFile(staticPath)
})

const port = 3000
app.listen(port, () => {
    console.log(`App working on port ${port}`)
})

