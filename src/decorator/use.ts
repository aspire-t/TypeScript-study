import 'reflect-metadata'
import { RequestHandler } from 'express'
import { CrowllerController, LoginController } from '../controller'

export function use(middleware: RequestHandler) {
  return function(target: CrowllerController | LoginController, key: string) {
    const originMiddlewares =
      Reflect.getMetadata('middlewares', target, key) || []
    originMiddlewares.push(middleware) // 如果有多个装饰器，就要先获取装饰器，再一起使用
    Reflect.defineMetadata('middlewares', originMiddlewares, target, key)
  }
}
