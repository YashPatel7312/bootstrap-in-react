import React from "react";
import Card from "./card.jsx"; // changed: import matches actual filename [src/card.jsx](src/card.jsx)

function App() {
  return (
    <div>
      

      {/* Example Cards */}
      <Card
        image="https://via.placeholder.com/200"
        title="First Card"
        description="This is the first card."
      />

      <Card
        image="https://via.placeholder.com/200"
        title="Second Card"
        description="This is the second card."
      />

      
    </div>
  );
}

export default App;
