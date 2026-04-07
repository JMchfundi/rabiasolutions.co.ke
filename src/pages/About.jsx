import aboutImage from "../assets/about-us-hero.jpg";

function About() {
  return (
    <div className="py-5">

      {/* ABOUT HEADER */}
      <div className="bg-light rounded text-center position-absolute top-0 start-0 w-100"
       style={{backgroundImage: `url(${aboutImage})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="lead">
          Rabia Solutions LTD is a Kenyan-based financial empowerment company dedicated to bridging the financial gap in agriculture.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2>Who We Are</h2>
          <p>
            Rabia Solutions LTD focuses on providing tailored loan services for farmers and agribusinesses. 
            Founded on the principles of Education, Wisdom, and Service, we empower communities through sustainable financial solutions.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={aboutImage}
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
                To be the leading provider of innovative, product-based loans that empower farmers and rural communities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To enable agricultural productivity and economic freedom by offering accessible, affordable, and practical loan solutions.
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
        <div className="col-md-3">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Deep Agricultural Focus</h5>
              <p className="card-text">We understand the unique needs of farmers and agribusinesses.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Tailored Loan Services</h5>
              <p className="card-text">Customized financial solutions to support growth, sustainability, and resilience.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Mission-Driven Support</h5>
              <p className="card-text">Grounded in Education, Wisdom, and Service, we focus on long-term empowerment.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Local Expertise, National Reach</h5>
              <p className="card-text">Kenyan-based knowledge with a vision to transform agriculture nationwide.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;