import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioModal from "./PortfolioModal";
import { portfolioItems } from "../portfoliodata";

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    const item = portfolioItems.find((item) => item.id === id);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} {...item} onClick={handleItemClick} />
          ))}
        </div>
      </div>
      <PortfolioModal item={selectedItem} onClose={handleCloseModal} />
    </section>
  );
}

export default Portfolio;
