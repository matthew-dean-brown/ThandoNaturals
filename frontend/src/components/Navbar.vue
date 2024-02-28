<template>
    <div class="logo">
        <img src="https://i.postimg.cc/fysNWgSy/Thando-Naturals2.jpg" alt="Logo" class="logo">
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
    .logo {
     width: 100px; 
     height: auto; 
     margin-right: 10px; 
    }

    .navbar {
     background-color: #966a32;
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

