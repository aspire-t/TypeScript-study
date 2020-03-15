// import express, { Request, Response, NextFunction } from 'express'
// import router from './router'
// import bodyParser from 'body-parser'

// const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
// // 自定义中间件，中间件实际上就是个函数
// app.use((req: Request, res: Response, next: NextFunction) => {
//   req.name = 'zhang san'
//   next()
// })

// app.use(router)

// app.listen(7575, () => {
//   console.log('server is running')
// })

import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import './controller/LoginController'
import './controller/CrowllerController'
import router from './router'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  cookieSession({
    name: 'session',
    keys: ['typescript express'],
    maxAge: 24 * 60 * 60 * 1000
  })
)

app.use(router)

app.listen(7575, () => {
  console.log('server is running')
})
