import React from 'react';

function Introduction() {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MyReactApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Introduction Content */}
      <div className="container mt-5">
        <h1 className="display-4">Welcome to MyReactApp!</h1>
        <p className="lead">
          This project is built using React and styled with Bootstrap 5.
          It includes reusable components, responsive layouts, and modern UI design.
        </p>
        <hr />
        <p>
          Use the navigation bar above to explore different sections of the application.
          We hope you find this project helpful and easy to use!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
