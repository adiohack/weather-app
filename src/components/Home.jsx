import React from "react";
import Button from "@mui/material/Button";

export function Home() {
  return (
    <>
      <h1>Welcome To Weather App</h1>
      <Button variant="contained" href="/login" className="btn">
        Login Page
      </Button>
    </>
  );
}
