import { Button } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { FaMoneyBillWave, FaExclamationTriangle, FaTint } from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import team1 from "../assets/team1.jpg";

const slides = [
  {
    image: hero1,
    title: "Empowering Farmers",
    text: "Transforming communities through innovation and financial solutions.",
    btn: "Contact Us",
  },
  {
    image: hero2,
    title: "Modern Agricultural Solutions",
    text: "Providing tools, loans, and expertise to help you grow.",
    btn: "Learn More",
  },
  {
    image: hero3,
    title: "Community Development",
    text: "Supporting initiatives that uplift farmers and families.",
    btn: "Join Us",
  },
];

const services = [
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Elimu Loan",
    text: "Education-related expenses such as school fees, uniforms, and books.",
    color: "primary",
  },
  {
    icon: <FaExclamationTriangle size={28} />,
    title: "Emergency Loan",
    text: "Immediate relief loans for unforeseen emergencies.",
    color: "success",
  },
  {
    icon: <FaTint size={28} />,
    title: "Drip Kits",
    text: "Modern drip irrigation kits to maximize water usage.",
    color: "warning",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleHover = useCallback((e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
  }, []);

  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="overflow-hidden mb-5" style={{ height: "85vh" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              opacity: index === current ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: index === current ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-100 h-100 object-fit-cover"
              style={{
                // filter: "brightness(0.7)",
                transform: index === current ? "scale(1)" : "scale(1.05)",
                transition: "transform 6s ease",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle w-100 px-5 text-center text-white">
              <h1 className="fw-bold display-5 mb-3">{slide.title}</h1>
              <p className="lead mb-4">{slide.text}</p>
              <Button variant="light" size="lg">
                {slide.btn}
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="container-fluid py-5 px-5 text-center">
        <h2 className="fw-bold mb-3">Helping the Community</h2>
        <p className="lead col-lg-8 mx-auto">
          We are a team of financial experts, agricultural advisors, and
          community developers working together to uplift farmers and improve
          livelihoods.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="container-fluid py-5 px-5 bg-light">
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <div className="row g-4 justify-content-center">
          {services.map((service, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              <div
                className="card h-100 shadow-sm text-center border-0"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <div
                  className={`bg-${service.color} text-white rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mt-3`}
                  style={{ width: "60px", height: "60px" }}
                >
                  {service.icon}
                </div>
                <div className="card-body p-4">
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="container-fluid py-5 px-5 text-center">
        <h2 className="fw-bold mb-4">Meet Our Team</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 col-lg-3">
            <div className="card shadow-sm h-100 border-0 text-center p-4">
              <img
                src={team1}
                className="rounded-circle mx-auto mb-3"
                alt="Maryam Lugogo"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5 className="fw-bold">Maryam Lugogo</h5>
              <p className="text-muted mb-2">CEO & Financial Manager</p>
              <small className="d-block">📞 +254740515444</small>
              {/* <small>✉️ maryamlugogo@gmail.com</small> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
