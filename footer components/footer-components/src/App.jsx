import React from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';  // import Footer

function App() {
  
  return (
    <div>
      <Header />
      
      {/* Example Card */}
      <Card 
        image="https://via.placeholder.com/200"
        title="Card Example"
        description="This is a simple card."
      />
      
      <Footer />  {/* Use Footer here */}
    </div>
  );
}

export default App;
