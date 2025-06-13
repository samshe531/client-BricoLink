import React, { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProfessional } from "../../JS/actions/bPro.action";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import './professionalProfile.css';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pro = useSelector((state) => state.bProreducer.pro);
  const isLoading = useSelector((state) => state.bProreducer.isLoadPro);

  useEffect(() => {
    if (id) {
      dispatch(getOneProfessional(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="pro-container mt-5">
      <Card className="pro-card shadow">
        <Row>
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <img src={pro?.photo} alt="profil" className="pro-photo" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                {pro.user?.name} {pro.user?.lastName}
              </Card.Title>
              <Card.Text>
                <strong>Email :</strong> {pro.user?.email}<br />
                <strong>Téléphone :</strong> {pro.user?.phone}<br />
                <strong>Gouvernorat :</strong> {pro.governorat}<br />
                <strong>Délégation :</strong> {pro.delegation}<br />
                <strong>Spécialités :</strong> {Array.isArray(pro.speciality) ? pro.speciality.join(", ") : "Non spécifié"}<br />
                <strong>Description :</strong> {pro.description}<br /><br />
                <Button variant="outline-primary" onClick={() => navigate(`/pro/update/${id}`)}>Mettre à jour </Button>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProfessionalProfile;

