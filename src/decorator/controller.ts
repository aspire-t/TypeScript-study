import router from '../router'
import { RequestHandler } from 'express'
import { Methods } from './request'

export function controller(root: string) {
  return function(target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key)
      const method: Methods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      )
      const middlewares: RequestHandler[] = Reflect.getMetadata(
        'middlewares',
        target.prototype,
        key
      )
      const handler = target.prototype[key]

      if (path && method) {
        const fullPath = root === '/' ? path : `${root}${path}` // 判断前缀，如果前缀等于 '/'，就直接使用path，如果不等于，就要拼接，
        // 判断有没有中间件
        if (middlewares && middlewares.length) {
          router[method](fullPath, ...middlewares, handler)
        } else {
          router[method](fullPath, handler)
        }
      }
    }
  }
}
