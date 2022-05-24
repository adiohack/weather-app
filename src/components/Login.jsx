import React from "react";

export function Login() {
  return (
    <>
      <h1>Welcome to login page</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </form>
    </>
  );
}
