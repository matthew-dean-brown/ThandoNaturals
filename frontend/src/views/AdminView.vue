<template>
  <div>
    <table class="product-table">
      <!-- Table header -->
      <thead>
        <!-- Table header row -->
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody v-if="$store.state.products != null">
        <!-- Table rows, looped over each product -->
        <tr v-for="(product, index) in products" :key="product.id" :class="{ 'zebra-stripe': index % 2 === 0 }">
          <!-- Display product details in each cell -->
          <td>{{ index + 1 }}</td>
          <td><h2>{{ product.prodName }}</h2></td>
          <td><p>Quantity: {{ product.quantity }}</p></td>
          <td><p>Price: {{ product.amount }}</p></td>
          <td><p>Category: {{ product.category }}</p></td>
          <td><img :src="product.prodUrl" alt="Product Image" class="product-image"></td>
          <!-- Actions column with edit and delete buttons -->
          <td>
            <!-- Edit button, calls editProduct method -->
            <button class="edit-btn" @click="editProduct(product)">Edit</button>
            <!-- Delete button, calls deleteProduct method -->
            <button class="delete-btn" @click="deleteProduct(product._id)">Delete</button>
          </td>
        </tr>
      </tbody>
      <article v-else>
        <Spinner /> 
      </article>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Spinner from '../components/Spinner.vue'

export default {
  components:{
    Spinner
  },
  computed: {
    // Get products from Vuex store
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    // Method to handle editing a product
    async editProduct(product) {
      console.log("Editing product:", product);
    },
    // Method to handle deleting a product
    async deleteProduct(prodID) {
      try {
        // Send DELETE request to delete the product
        await axios.delete(`https://thandonaturals-1.onrender.com/products${prodID}`);
        // After successful deletion, fetch the updated list of products
        this.$store.dispatch('fetchProducts');
      } catch (error) {
        // Handle error if deletion fails
        console.error('Error deleting product:', error);
      }
    },
  },
  mounted(){
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style>
.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  padding: 12px;
  text-align: left;
}

.product-table th {
  background-color: #f2f2f2;
}

.product-table .product-image {
  max-width: 100px;
  height: auto;
}

.edit-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  background-color: #a07c7c;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.delete-btn {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #d3d61f;
}

.zebra-stripe {
  background-color: beige;
}
</style>
