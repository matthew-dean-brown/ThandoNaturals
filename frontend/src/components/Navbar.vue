<template>
      <div class="image-section">
    <div class="logo-container">
      <img src="https://i.postimg.cc/fysNWgSy/Thando-Naturals2.jpg" alt="Logo" class="logo">
      <h1 class="company-name">ThandoNaturals</h1>
    </div>
    <div>
        <p>Nurture Your Roots, Embrace Your Beauty!</p>
    </div>
  </div>
        <nav class="navbar">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/Product">Products</router-link> |
            <router-link to="/Admin">Admin</router-link> |
            <router-link to="/Contact">Contact</router-link> 
        </nav>
</template>

<script>
</script>

<style>
      /* Image section */
  .image-section {
    margin-bottom: 20px; /* Add space between sections */
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 100px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
    margin-right: 100px; /* Add space between logo and text */
  }
  
  .company-name {
    font-size: 05em; /* Adjust font size as needed */
    margin: 0; /* Remove default margin */
  }

    .navbar {
     background-color: #ffffff;
     padding: 10px 0; 
     text-align: center;
    }

     .navbar router-link {
     color: white; 
     text-decoration: none;
     margin: 0 10px; 
     padding: 10px; 
    }

    .navbar router-link.router-link-exact-active {
     color: #b09813; 
    }
</style>

