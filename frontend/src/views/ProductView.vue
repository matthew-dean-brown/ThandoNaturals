<template>
    <div v-if="$store.state.products!= null" class="product-grid">
      <div v-for="product in $store.state.products" :key="product.prodID" class="product-card">
      <!-- <div v-for="item in $store.state.products" :key="item" class="product-card"> -->
        <h2>{{ product.prodName }}</h2>
        <p>Quantity: {{ product.quantity }}</p>
        <p>Price: {{ product.amount }}</p>
        <p>Category: {{ product.category }}</p>
        <img :src="product.prodUrl" alt="Product Image" style="max-width: 100%; height: auto;">
      </div>
      <!-- <div class="view-more">
        <router-link :to="{name: 'singleProduct',params:{id: product.prodID}}">View More</router-link>
      </div> -->
    </div>
    <article v-else>
        <Spinner /> 
      </article>
  </template>
  
  <script>
  import Spinner from '../components/Spinner.vue'
  export default {
    components:{
    Spinner
  },
    computed: {
      products() {
        this.$store.dispatch('fetchProducts'); 
      }
    },
    mounted() {
        this.products
             
    }
  };
  </script>
  
  <style>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
  }

  .product-card {
    border: 1px solid #ccc;
    padding: 20px;
  }

  
  .product-card img {
    margin-top: 10px; 
    max-height: 150px; 
    object-fit: cover; 
  }
</style>