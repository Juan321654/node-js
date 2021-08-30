// import {readFile} from 'fs'
// without fs/promises
// readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
//   if (err) {
//     throw err
//   } else {
//     //
//   }
// })

// import { readFile } from "fs/promises";
// // on top level you do not need to push "async" and just use await
// try {
//   const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (error) {
//   console.log(error)
// }


import { readFile } from "fs/promises";

process.on('uncaughtException', (e) => {
  console.log(e)
})

const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
console.log('hello')