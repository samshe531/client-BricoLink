// src/pages/AboutPage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-4">À propos de Bricolink</h1>
        <p className="lead text-center mb-5">
          La plateforme qui connecte les particuliers avec des professionnels du bâtiment en toute confiance.
        </p>

        <Row className="mb-4">
          <Col md={6}>
            <h4>Notre mission</h4>
            <p>
              Chez <strong>Bricolink</strong>, notre mission est simple : faciliter l'accès aux meilleurs artisans près de chez vous.
              Que vous ayez besoin d'un plombier, d'un électricien ou d'un maçon, nous vous aidons à trouver des professionnels fiables et compétents.
            </p>
          </Col>
          <Col md={6}>
            <h4>Pourquoi nous choisir ?</h4>
            <ul>
              <li>Professionnels vérifiés et évalués</li>
              <li>Interface simple et rapide</li>
              <li>Gain de temps dans vos recherches</li>
              <li>Support client à l'écoute</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <h5> Trouvez</h5>
                <p>Recherchez un professionnel par spécialité ou localisation.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <h5> Contactez</h5>
                <p>Consultez les profils et contactez directement les artisans disponibles.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <h5> Engagez</h5>
                <p>Choisissez un professionnel de confiance pour réaliser vos travaux.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <h5>Contact</h5>
          <p>Contactez-nous à <a href="mailto:contact@bricolink.tn">contact@bricolink.tn</a></p>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
