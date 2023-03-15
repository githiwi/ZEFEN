import React from "react";
import "./Home.css";
import eskesta from '../../images/eskesta.webp'
export default function Home() {
  return (
    <div className="front">
      <div>
      <img src={eskesta} alt="dancing person" />
      </div>
      <div>
        <form>
        <h2>Subscribe Our Page </h2>
                <label>Enter yourname</label><br />
                <input type="text" name="firstname" placeholder="name" /><br />
                <label>Enter Email address</label><br />
                <input type="email" name="lastname"  required  placeholder="abc@email.com" /><br />
                <br/>
               <button class="suscribe">submit</button>
        </form>
      </div>

     
    </div>
  );
}
