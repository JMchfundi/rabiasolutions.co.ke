import { Button } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { FaMoneyBillWave, FaExclamationTriangle, FaTint, FaWater, FaTractor, FaGifts, FaShieldAlt } from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import team1 from "../assets/team1.jpg";

const slides = [
  {
    image: hero1,
    title: "Empowering Farmers, Transforming Lives",
    text: "Providing direct and indirect loans tailored to meet farmers' needs across Kenya.",
    btn: "Contact Us",
  },
  {
    image: hero2,
    title: "Modern Agricultural Solutions",
    text: "Loans, tools, and expertise to help farmers grow.",
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
    text: "Supports education expenses such as school fees, uniforms, and books for children of farmers.",
    color: "primary",
  },
  {
    icon: <FaExclamationTriangle size={28} />,
    title: "Emergency Loan",
    text: "Immediate relief loans for emergencies like medical bills or natural disasters.",
    color: "success",
  },
  {
    icon: <FaTint size={28} />,
    title: "Drip Kits",
    text: "Modern drip irrigation kits to maximize water usage and crop yield.",
    color: "warning",
  },
  {
    icon: <FaWater size={28} />,
    title: "Water Pumps",
    text: "Manual and motorized pumps to support irrigation and water supply on farms.",
    color: "info",
  },
  {
    icon: <FaTractor size={28} />,
    title: "Farming Equipment",
    text: "Sprayers, hoes, planters, and machinery to reduce labor intensity.",
    color: "secondary",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Development Loans",
    text: "Loans for large-scale agricultural or personal development projects.",
    color: "dark",
  },
  {
    icon: <FaGifts size={28} />,
    title: "Festive Package",
    text: "Special loans for holidays including household items, clothing, and school supplies.",
    color: "danger",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Crop Insurance & Loan Guard",
    text: "Protection against crop failure and financial security in case of death or disability.",
    color: "warning",
  },
];

const team = [
  {
    name: "Maryam Lugogo",
    role: "CEO & Financial Manager",
    phone: "+254740515444",
    // email: "maryamlugogo@gmail.com",
    image: team1,
  }
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
    e.currentTarget.style.transform = enter ? "translateY(-5px)" : "translateY(0)";
  }, []);

  return (
    <div>
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
                transform: index === current ? "scale(1)" : "scale(1.05)",
                transition: "transform 6s ease",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle w-100 px-5 text-center text-white">
              <h1 className="fw-bold display-5 mb-3">{slide.title}</h1>
              <p className="lead mb-4">{slide.text}</p>
              <Button variant="light" size="lg">{slide.btn}</Button>
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="container-fluid py-5 px-5 text-center">
        <h2 className="fw-bold mb-3">Helping the Community</h2>
        <p className="lead col-lg-8 mx-auto">
          We are a diverse team of financial experts, agricultural advisors, and community developers working together to uplift farmers. Our goal is to provide transparent, reliable, and impactful loan services.
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
          {team.map((member, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              <div className="card shadow-sm h-100 border-0 text-center p-4">
                <img
                  src={member.image}
                  className="rounded-circle mx-auto mb-3"
                  alt={member.name}
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted mb-2">{member.role}</p>
                <small className="d-block">📞 {member.phone}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;