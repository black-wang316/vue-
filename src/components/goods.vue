<template>
  <ul class="nav">
            <li :class="styles=='Home'?'cur':''" @click="change('Home')">
              <i class="fa fa-home"/>
              <span>首页</span>
            </li>
            <li :class="styles=='List'?'cur':''" @click="change('List')">
              <i class="fa fa-list"/>
              <span>列表</span>
            </li>
            <li :class="styles=='Shopping'?'cur':''" @click="change('Shopping')">
              <i class="fa fa-shopping-cart"/>
              <span>购物车</span>
              <p v-show="count>0">{{count}}</p>
            </li>
            <li :class="styles=='Mine'?'cur':''" @click="change('Mine')">
              <i class="fa fa-user"/>
              <span>我的</span>
            </li>
          </ul>
</template>

<script>
export default {
data() {
          return {
            count: 0,
            styles: "Home",
          };
        },
        methods: {
          change(page) {
            this.$emit("pagechange", page);
            this.styles = page;
          },
        },
        created() {
          this.$eventBus.$on("buy", () => {
            this.count++;
          });
        },
}
</script>

<style>

</style>