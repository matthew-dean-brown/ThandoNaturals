<template>
  <Navbar/>
  <Footer/>
  <Spinner/>

  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import Spinner from './components/Spinner.vue'
  export default{
    components:{
      Navbar,
      Footer,
      Spinner
    },
    data() {
    return {
      loading: true, // Spinner set to true when loading 
    };
  },
    
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


footer {
    text-align: center;
    margin-top: 20px;
    color: #000000;
    position: fixed;
    bottom: 0%;
    width: 100%;
    background-color: whitesmoke; /* to be changed */
  }

</style>

<footer>@ThandoNaturals2024</footer>
