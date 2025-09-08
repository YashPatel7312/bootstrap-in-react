import React from 'react';
import Header from './Header.jsx'; // import Header component

function App() {
  return (
    <div>
      <Header />  {/* Use Header here */}
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>This is the main content.</p>
    </div>
  );
}

export default App;
