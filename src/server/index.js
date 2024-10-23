import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {App} from '../client/app'
import {template} from "./template";

const app = express()

app.get('/', (_, res) => {
    const reactHTML = renderToString(<App/>)
    const html = template.replace('{{root}}', reactHTML)


    res.status(200)
    res.send(html)
})

app.get('/static/*', () => {})

const port = 3000
app.listen(port, () => {
    console.log(`App working on port ${port}`)
})

