<template>
    <div class="contact-container">
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
    </div>
  </template>
  <style>
  .contact-container {
    border: 2px solid #ccc;
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    border-radius: 10px;
    background-image: url("https://i.ibb.co/nzn8Xjt/Various-Cosmetic-Products-On-Boxes-by-Stocksy-Contributor-Mart-Sans.jpg");
  }
  .contact-form {
    /* background-color: #000000; */
    border-radius: 10px;
    padding: 30px;
  }
  .contact-form h2 {
    text-align: center;
    color: #fcfcfc;
    margin-bottom: 20px;
  }
  .contact-form form label {
    display: block;
    margin-bottom: 8px;
    color: #ffffff;
    font-weight: bold;
  }
  .contact-form form input[type="text"],
  .contact-form form input[type="email"],
  .contact-form form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }
  .contact-form form textarea {
    height: 100px;
  }
  .contact-form form input[type="text"]:focus,
  .contact-form form input[type="email"]:focus,
  .contact-form form textarea:focus {
    outline: none;
  }
  .contact-form form button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .contact-form form button:hover {
    background-color: #854817;
  }
</style>