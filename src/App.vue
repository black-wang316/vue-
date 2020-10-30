<template>
  <div id="app">
    <keep-alive>
        <component :is="cur" class="content"></component>
      </keep-alive>
      <goods @pagechange="page"></goods>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home'
import List from './components/List'
import Shopping from './components/Shopping'
import Mine from './components/Mine'
import goods from './components/goods'

export default {
  name: 'App',
  
  data() {
    return{
      cur: "Home",
    }
  },
  methods: {
    page(cu) {
      this.cur = cu;
    },
  },
  components: {
    HelloWorld,
    Home,
    List,
    Shopping,
    Mine,
    goods,
  }
}
</script>

<style>
 html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    #app {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
    }
    .box {
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
    }
    .left {
      display: flex;
      align-items: center;
    }
    .left img {
      width: 200px;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .nav {
      height: 2rem;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      text-align: center;
      border-top: solid 1px orange;
    }
    li {
      display: flex;
      flex-direction: column;
      position: relative;
      cursor: default;
    }
    li p {
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: red;
      top: -1.5rem;
      right: 0.2rem;
      color: white;
      font-size: 12px;
      text-align: center;
    }
    .cur {
      color: red;
    }
</style>
