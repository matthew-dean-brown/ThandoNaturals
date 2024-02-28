<template>
    <div class="contact-form">
      <h2>Write Us!</h2>
      <form action="https://formspree.io/f/moqgwwen" method="POST">
          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" placeholder="Your Full Name" required>
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" required>
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Message Us" required></textarea>
          <div class="send-message">
              <button type="submit">Send</button>
          </div>
      </form>
  </div>
  </template>
  <style>
      .contact-form {
          border: 2px solid #654321; 
          padding: 50px;
          max-width: 400px;
          margin: 0 auto;
          background-color: #723f15;
          border-radius: 30px;
      }
  
      .contact-form h2 {
          text-align: center;
          color: #000000; 
      }
  
      .contact-form form label {
          display: block;
          margin-bottom: 10px;
          color: #000000; 
      }
  
      .contact-form form input[type="text"],
      .contact-form form input[type="email"],
      .contact-form form textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid black;
          border-radius: 5px;
      }
  
      .contact-form form textarea {
          height: 100px; 
      }
  
      .contact-form form button {
          background-color: #654321; 
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
      }
  
      .contact-form form button:hover {
           background-color: #854817; 
      }
  </style>
  
  