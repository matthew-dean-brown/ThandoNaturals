<template>
  <div class="about">
        <img src="https://i.postimg.cc/D0ST069s/Thando-Naturals-1.png" alt="" class="center-image">
        <h1 class="about-heading">About Us</h1>
     <div class="container">
        <h2>Who Are We?</h2>
        <p>Welcome to ThandoNaturals, where love for natural hair meets empowerment. 
           Founded in South Africa by Thandeka and Ntando, our name "Thando" symbolizes 
           love—a love for natural hair and a commitment to empowering our community.
           <br><br>
           Inspired by a shared passion and the realization that many lacked resources 
           and knowledge to care for their natural hair, we set out to make a difference. 
           Our mission is simple: provide high-quality, ethically sourced products at accessible
           prices, ensuring everyone can embrace their roots with pride.
           <br><br>
           Crafted with care and consideration for diverse needs, our formulations celebrate the 
           beauty of African hair. From lush landscapes to global stages, ThandoNaturals is redefining 
           beauty standards and empowering self-expression.
           <br><br>
           Join us on this journey of love, authenticity, and empowerment. Together, let's celebrate the 
           beauty of natural hair and make a difference—one curl at a time.
           <br><br>
           Welcome to the ThandoNaturals family.
           <br><br>
           With love and curls.
        </p>
     </div>
  </div>
</template>

<style>
   h2, p {
     color: black;
   }

   .about {
     text-align: center;
   }

  
   .center-image {
     display: block;
     margin: 0 auto;
     max-width: 100%; /*Ensure image fits within container*/
   }

   .about-heading {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     opacity: 0;
     font-size: 3em;
     color: white;
     animation: fadeIn 1s forwards;
   }

   .container {
     max-width: 600px; 
     margin: 20px auto;
   }

   h1{
    text-align: center;

   }

   @keyframes fadeIn {
     from {
       opacity: 0;
     }
     to {
       opacity: 5;
     }
   }
</style>