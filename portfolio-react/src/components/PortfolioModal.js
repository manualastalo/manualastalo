import React from "react";

function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="portfolio-modal modal fade show"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {item.modalContent.images.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  className="img-fluid d-block mx-auto"
                  src={image.src}
                  alt={image.alt}
                />
                <p className="text-start px-2">{image.description}</p>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
