import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Textutils
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">

              <h1 className="hero-title">
                Enhancv’s <span>CV Builder</span> assists you in landing roles
                at leading companies
              </h1>

              <div className="hero-buttons">
                <button className="btn btn-success btn-lg me-3">
                  Build Your CV
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  Get Your CV Score
                </button>
              </div>

              <div className="rating mt-4">
                <strong>Excellent</strong>
                <span className="stars ms-2">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </span>
                <span className="ms-2">5,038 reviews</span>
              </div>

              <p className="hero-subtext mt-5">
                Numerous CV templates and thousands of design combinations
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
