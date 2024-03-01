<template>
    <div class="product-grid">
      <card v-for= "product in $store.state.products" :key="product.prodID">
        <h2>{{ product.prodName }}</h2>
        <p>Price: {{ product.amount }}</p>
        <p>Category: {{ product.category }}</p>
        <img :src="product.prodUrl" alt="Product Image" style="max-width: 100%; height: auto;">
      </card>
     </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
    components:{
        card
    },
}

</script>
<style>
    
</style>