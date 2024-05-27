import img1 from "../assets/images/sleep.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import aero from "../assets/images/aero.png";
function Home() {
  var styleText = {
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid bg-light" style={styleText}>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-md-6 pt-5 ps-3">
            <h1 className="fs-1">Start Selling Today</h1>
            <p className="pt-2">
              Put your products in front of more than 300 million customers
              worldwide
            </p>
            <button className="btn btn-success">Start Selling</button>
          </div>
          <div className="col-md-6 pt-5">
            <img src={aero} height={300} width={300}></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
