<template>
  <div class="image-section">
    <div class="logo-container">
      <img src="https://i.postimg.cc/fysNWgSy/Thando-Naturals2.jpg" alt="Logo" class="logo">
      <h1 class="company-name"><strong>ThandoNaturals</strong></h1>
    </div>
    <div>
      <p><i>Nurture Your Roots, Embrace Your Beauty!</i></p>
    </div>
    <nav class="navbar navbar-light" style="background-color: #F5F5DC;">
      <div class="container-fluid">
        <router-link to="/" class="nav-link">Home</router-link> 
        <router-link to="/about" class="nav-link">About</router-link> 
        <router-link to="/Product" class="nav-link">Products</router-link> 
        <router-link to="/Admin" class="nav-link">Admin</router-link> 
        <router-link to="/Contact" class="nav-link">Contact</router-link>
        <form class="d-flex ms-auto">
          <input
            v-model="searchQuery"
            type="search"
            class="form-control rounded me-2"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button class="btn btn-outline-secondary" type="submit" id="search-addon">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    searchProducts() {
      console.log('Searching for:', this.searchQuery);
    }
  }
};
</script>

<style>
.image-section {
  margin-bottom: 50px;
}
.logo-container {
  display: flex;
  align-items: center;
}
.logo {
  width: 100px;
  height: auto;
  margin-right: 20px;
}
.company-name {
  font-size: 5.5em;
  margin: 0;
  color: #000;
}
.navbar {
  padding: 5px 0;
  text-align: center;
}
.nav-link {
  margin: 0 10px; 
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease; 
}
</style>