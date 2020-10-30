<template>
  <div class="box" >
          <div class="left">
            <!-- <input type="checkbox" v-model="item.checked" /> -->
            <img :src="item.imageUrl" alt="" />
          </div>
          <div class="right">
            <p>{{item.name}}</p>
            <!-- <p>{{item.price}}</p> -->
            <button @click="addHandle">加入购物车</button>
          </div>
        </div>
</template>

<script>
export default {
  props:["item"],
    methods: {
          addHandle() {
            this.$eventBus.$emit("buy", this.item);
            // console.log(this.item)
          },
        },
}
</script>

<style>

</style>