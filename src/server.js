import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerAdministrator from './routers/administrator_routes.js'

const app = express()
dotenv.config()

app.set('port',process.env.PORT || 3000)

app.use(cors())
app.use(express.json())

app.use('/api',routerAdministrator)

app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default  app