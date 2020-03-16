import { Router } from 'express'

// 因为express库的类型定义文件 .d.ts 文件类型描述不准确，都是any类型，可以使用interface这种方式，手动的制定类型
// interface RequestWithBody extends Request {
//   body: {
//     // password: string | undefined
//     [key: string]: string | undefined // 范匹配
//   }
// }

// const router = Router()

// router.get('/', (req: Request, res: Response) => {
//   res.send('hello')
// })

// router.get('/getData', (req: Request, res: Response) => {
//   res.send('world')
// })

// router.get('/showData', (req: Request, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, '../data/course.json')
//     const result = fs.readFileSync(position, 'utf8')
//     res.json(getResponseData(JSON.parse(result)))
//   } catch (error) {
//     res.send('没有内容')
//   }
// })

export default Router()
