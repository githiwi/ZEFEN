import React, { useState } from "react";

import "./Home.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submiting form with name : ${name} and email : ${email}`);
    alert("thank you for subscribing");
  }

  return (
    <div className="front">
       <div></div>
      <div>
       
        <form onSubmit={handleSubmit}>
          <h2>Subscribe Our Page </h2>
          <label>Enter yourname</label>
          <br />
          <input
            type="text"
            name="firstname"
            required
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Enter Email address</label>
          <br />
          <input
            type="email"
            name="text"
            required
            placeholder="abc@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button class="Suscribe">submit</button>
        </form>
      </div>
    </div>
  );
}
