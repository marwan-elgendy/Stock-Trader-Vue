<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
         <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
    </ul>
    
    <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay()">End Day</a></li>
         <li><a href="#" @click="saveData()">save</a></li>
         <li><a href="#" @click="loadData()">load</a></li> 
        <li>
          <strong >Funds: {{funds | currency}}</strong>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  
  computed: { 
    funds(){
      return this.$store.getters.funds
    }
   },
   methods: {
     ...mapActions({
       randomizeStocks: 'randomizeStocks',
       fetchData: 'loadData'
     }),
     endDay(){
       this.randomizeStocks();
     },
     saveData(){
       const data = {
         funds: this.$store.getters.funds,
         stockPortfolio: this.$store.getters.stockPortfolio,
         stocks: this.$store.getters.stocks
       }
       this.$http.put('data.json', data);
     },
     loadData(){
       this.fetchData();
     }
   }
}
</script>

<style>
.navbar-right{
  position: absolute;
  right: 0;
}
.navbar-right > li{
  margin: 5px;
}

</style>