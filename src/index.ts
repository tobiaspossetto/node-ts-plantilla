import express from 'express';

import IndexRoutes from './routes'
//initializations
export const app = express()


//settings
app.set('port', process.env.port || 4000)



//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false})) //poder interpretar datos de un form


//routes

app.use('/', IndexRoutes);


//starting server

export const server = app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})