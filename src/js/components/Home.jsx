import React from "react";

// Importar los componentes
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";


const Home = () => {
  
  const cardsData = [
    { title: "Card 1", text: "This is the first card", image: "https://picsum.photos/500/325?random=1" },
    { title: "Card 2", text: "This is the second card", image: "https://picsum.photos/500/325?random=2" },
    { title: "Card 3", text: "This is the third card", image: "https://picsum.photos/500/325?random=3" },
    { title: "Card 4", text: "This is the fourth card", image: "https://picsum.photos/500/325?random=4" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Jumbotron */}
      <Jumbotron />

      {/* Cards */}
      <div className="container mt-4">
        <div className="row">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              image={card.image}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;