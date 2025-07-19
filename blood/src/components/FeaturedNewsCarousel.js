import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedNewsCarousel = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 8000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [newsData.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const news = newsData[currentIndex];

  return (
    <div className="mb-5">
      <section className="row align-items-center position-relative mb-3">
        <div className="col-md-6 position-relative">
          <img
            src={news.image}
            alt={news.title.en}
            className="img-fluid rounded shadow w-100"
          />
          {/* Navigation Buttons - now inside image container */}
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2"
            onClick={goToPrev}
            style={{ zIndex: 1 }}
          >
            &lt;
          </button>
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
            onClick={goToNext}
            style={{ zIndex: 1 }}
          >
            &gt;
          </button>
        </div>
        <div className="col-md-6">
          <h3>{news.title.en}</h3>
          <p>{news.description.en.slice(0, 150)}...</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/news")}
          >
            Read More
          </button>
        </div>
      </section>

      {/* Indicators */}
      <div className="d-flex justify-content-center gap-2">
        {newsData.map((_, index) => (
          <button
            key={index}
            className={`btn p-0 ${
              index === currentIndex ? "text-primary" : "text-secondary"
            }`}
            onClick={() => goToIndex(index)}
            style={{ width: "10px", height: "10px" }}
          >
            •
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNewsCarousel;