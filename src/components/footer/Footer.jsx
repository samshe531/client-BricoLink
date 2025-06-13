// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>Bricolink</h5>
            <p>
              Bricolink met en relation les particuliers avec des professionnels
              qualifiés du bâtiment. Trouvez rapidement un ouvrier fiable près de chez vous.
            </p>
          </Col>

          <Col md={4} sm={6} className="mb-3">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <Nav.Link href="/about">À propos</Nav.Link>

              
            </ul>
          </Col>

          <Col md={4} sm={6} className="mb-3">
            <h5>Contact</h5>
            <p><FaPhone /> +216 12 345 678</p>
            <p><FaEnvelope /> contact@bricolink.tn</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-white" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Bricolink. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
