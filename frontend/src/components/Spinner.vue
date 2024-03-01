<template>
  <div>
    <div v-if="!loaded" class="loader">
      <div class="custom-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
}
</script>

<style scoped>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3333;
}

.custom-spinner {
  border: 6px solid #226c2b; 
  border-top: 6px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>