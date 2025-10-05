"use client";

import Script from "next/script";

export default function Login() {




  return ( // dito ka sa baba ng return mag  dedesign ng html mo
    <div>
      <h1>Login</h1>
      <form>
        <div id="email-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>

    
  );
}

