<template>
  <div class="row">
    <app-stock class="col-lg-4 col-md-6 col-xs-12" v-for="(stock,index) in stocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './stock.vue'
  export default {
    components:{
      appStock: Stock
    },
    computed: {
      stocks(){
        return this.$store.getters.stocks;
      },
    }
  }
</script>

<style>

</style>