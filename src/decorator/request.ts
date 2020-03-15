import { CrowllerController, LoginController } from '../controller'

export enum Methods {
  get = 'get',
  post = 'post'
}

function getRequestDecorator(type: Methods) {
  return function(path: string) {
    return function(target: CrowllerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key) // 存路径
      Reflect.defineMetadata('method', type, target, key) // 存方法
    }
  }
}

export const get = getRequestDecorator(Methods.get)
export const post = getRequestDecorator(Methods.post)
