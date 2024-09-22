import React from "react";

function PortfolioItem({ id, title, subtitle, imageSrc, onClick }) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item shadow-sm p-3 mb-5 bg-body rounded">
        <a className="portfolio-link" onClick={() => onClick(id)}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          {imageSrc ? (
            <img
              className="img-fluid"
              src={imageSrc}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg";
              }}
            />
          ) : (
            <div className="placeholder-image">{title}</div>
          )}
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
