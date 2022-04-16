import * as Comlink from 'comlink'

const fns = {
   toUpperCase(msg) {
      return msg && msg.toUpperCase()
   },
   heavyTask(count) {
      let final = 0
      for (let i = 0; i < count; i++) {
         final += i
      }
      return final
   },
   heavyFetch1() {
      return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
   },
   heavyFetch2() {
      return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
   },
   heavyFetch3() {
      return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
   },
}

Comlink.expose(fns)

// onmessage = function () {
//    let final = 0
//    for (let i = 0; i < 10000000000; i++) {
//       final += i
//    }
//    postMessage(final)
// }
