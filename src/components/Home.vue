<template>
<!-- <div class="home">   -->
 <swiper ref="mySwiper" :options="swiperOptions" class="banner">
    <swiper-slide v-for="item in img" :key="item.imageUrl"><img :src="item.imageUrl" class="item-img" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
<!-- </div> -->
</template>

<script>
 export default {
    name: 'Home',
    data() {
      return {
        img:[],
        swiperOptions: {
          loop:true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    },
    created() {
      fetch('http://net-music.penkuoer.com/banner')
      .then((res)=>res.json())
      .then((res)=>this.img=res.banners)
    }
  }
</script>

<style scoped>
  .banner{
    height: 300px;
    overflow: hidden;
  }
  .item-img{
    width: 100%;
    height: 200px;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 410px;
    left: 0;
    width: 100%;
  }
</style>