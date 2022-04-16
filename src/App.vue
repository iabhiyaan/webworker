<template>
  <div id="app">
    <input type="text" v-model="message" />
    <button @click="postData">Post Data</button>
    <div>{{ this.final }}</div>
    <div>
      <button @click="showAlert">Show alert</button>
    </div>
    <br />
    <br />
    <br />
    <div>
      <button @click="withOutWebWorker">Normal Fetch</button>
    </div>
  </div>
</template>

<script>
import { heavyTask } from './worker-api'
export default {
  name: 'App',
  data() {
    return {
      message: '',
      final: 0,
    }
  },
  methods: {
    async postData() {
      const heavyTaskResult = await heavyTask(this.message);
      this.final = heavyTaskResult
    },
    showAlert() {
      alert(this.message)
    },
    async withOutWebWorker() {
      await this.normalFetch1()
      await this.normalFetch2()
      await this.normalFetch3()
      await this.normalFetch4()
      await this.normalFetch5()
    },
    normalFetch1() {
      return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
    },
    normalFetch2() {
      return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    },
    normalFetch3() {
      return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    },
    normalFetch4() {
      return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    },
    normalFetch5() {
      return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    }
  }
}
</script>

<style>
</style>
