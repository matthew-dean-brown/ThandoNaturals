<template>
  <section class="carousel-section">
    <div class="carousel-container">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ibb.co/mBW7Qnd/Untitled-design-1.png" class="d-block mx-auto carousel-image" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/syf94WC/Untitled-design-1.png" class="d-block mx-auto carousel-image" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/4YzYkt4/Untitled-design.png" class="d-block mx-auto carousel-image" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/syf94WC/Untitled-design-1.png" class="d-block mx-auto carousel-image" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   
  </section>
</template>

<script>
export default {
  mounted() {
    // this.initCarousel();
  },
}
</script>

<style>
.carousel-section {
  padding: 20px;
}

.carousel-container {
  max-width: 1000px; 
  margin: auto; 
  background-color: #ac6f31;
}

.carousel-image {
  max-width: 500%; 
  height: 500%; 
}


</style>