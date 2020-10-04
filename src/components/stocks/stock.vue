<template>
  <div class="col-sm-6 col-md-4">
    <div class="card panel-success">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}$)</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="grid">
          <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button
           class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 "
            :class="(insufficientFunds) ? 'btn-danger' : 'btn-success' ">
            {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:[
   'stock'
 ],
 data(){
   return{
     quantity: 0
   }
 },
 computed:{
   funds(){
     return this.$store.getters.funds;
   },
   insufficientFunds(){
     return this.quantity * this.stock.price > this.funds;
   }
 },
 methods:{
   buyStock(){
     const order = {
       stockId: this.stock.id,
       stockPrice: this.stock.price,
       quantity: Number(this.quantity)
     };
     this.$store.dispatch('buyStock', order);
     
     this.quantity = 0;
   }
 }
}
</script>

<style>
.card{
  margin: 10px;
}
.pull-left{
  margin-bottom:5px;
  grid-column-start: 1;
  grid-column-end: 3;
}
.grid{
  display: grid;
}
.pull-right{
grid-column-start: 4;
}
</style>