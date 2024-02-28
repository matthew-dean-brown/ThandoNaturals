<template >
    <div>
        <div v-if="!loaded" class="loader">
      <div class="loader-spinner"></div>
    </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        loaded: false // Initial state: page not loaded
      };
    },
    mounted() {
      // Simulate a 5-second delay before displaying content
      setTimeout(() => {
        // Set loaded to true after 2 seconds
        this.loaded = true;
      }, 2000);
    }
  }
  </script>
    
    <style>
    .spinner {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #635531;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    </style>