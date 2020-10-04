<template>
  <div class="col-sm-6 col-md-4">
    <div class="card panel-info">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}$ | Quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="grid">
          <div class="pull-left">
          <input type="number" 
          class="form-control" 
          placeholder="Quantity" 
          v-model="quantity">
        </div>
        <div class="pull-right">
          <button
            class="btn"
            @click="sellStock"
            :disabled="insufficientQuantity ||quantity <= 0 "
            :class="(insufficientQuantity) ? 'btn-danger' : 'btn-success' ">
            {{insufficientQuantity ? 'Not Enough' : 'Sell'}}
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
     insufficientQuantity(){
         return this.quantity > this.stock.quantity;
     }
 },
 methods:{
    ...mapActions({
        placeSellOrder: 'sellStocks'
    }),
    sellStock(){
      const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Number(this.quantity)
      }
      this.placeSellOrder(order);
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