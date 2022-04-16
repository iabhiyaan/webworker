import Worker from 'worker-loader!./worker'
import * as Comlink from 'comlink'
export const worker = Comlink.wrap(new Worker())

export const toUpperCase = worker.toUpperCase
export const heavyTask = worker.heavyTask
export const heavyFetch1 = worker.heavyFetch1
export const heavyFetch2 = worker.heavyFetch2
export const heavyFetch3 = worker.heavyFetch3

export function sendMessage(Vue) {
   worker.postMessage(Vue.message)
   worker.onmessage = function (e) {
      Vue.final = e.data
   }
}
