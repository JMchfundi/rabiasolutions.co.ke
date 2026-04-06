function About() {
  return (
    <div className="py-5">

      ABOUT HEADER
      <div className="bg-light p-5 rounded text-center mb-5">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="lead">
          Rabia Solutions LTD is committed to empowering farmers and transforming communities.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2>Who We Are</h2>
          <p>
            Rabia Solutions LTD is a forward‑thinking agritech and finance company dedicated to helping agricultural communities thrive.
            We provide tailored financial solutions and support to farmers, entrepreneurs, and families.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/assets/about-us-hero.jpg" /* update path or file name */
            alt="About Rabia Solutions"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="row text-center mb-5">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be the leading partner in uplifting agricultural communities through innovative financial solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower farmers by providing accessible financial services and support for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-center mb-4">
        <h2>Why Choose Us</h2>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Focused on Results</h5>
              <p className="card-text">We help you achieve financial goals with proven solutions.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Personalized Support</h5>
              <p className="card-text">Dedicated advisors for every client.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Trusted Partnership</h5>
              <p className="card-text">Building long‑term relationships with farmers.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;