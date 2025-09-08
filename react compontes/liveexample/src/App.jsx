import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header style={{ background: "#282c34", padding: "1rem", color: "white", textAlign: "center" }}>
      <h1>My React Website</h1>
    </header>
  );
}

function Card() {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      maxWidth: "250px",
      margin: "1rem auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <img 
        src="https://via.placeholder.com/200" 
        alt="Example" 
        style={{ borderRadius: "8px", width: "100%" }} 
      />
      <h2 style={{ margin: "0.5rem 0" }}>Card Title</h2>
      <p>This is a simple card made with React.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#282c34", padding: "1rem", color: "white", textAlign: "center" }}>
      <p>© 2025 My React Website</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}
