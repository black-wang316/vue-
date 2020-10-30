<template>
  <div class="content">
      <Box v-for="item in arr" :key="item.id" :item="item" class="box"></Box>
    </div>
</template>

<script>
import Box from './Box'

export default {
 data() {
          return {
            arr:[],
          };
        },
      
        components:{
          Box,
        },
         created() {
          fetch("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&data_type=1&mode=24&page_id=1&ret_num=48")
            .then((res) => res.json())
            .then((res) => (this.arr = res.data.list));
        },
}
</script>

<style>

</style>