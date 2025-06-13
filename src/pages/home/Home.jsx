import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./home.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ListeValide from "../../components/listeValide/ListeValide";
import { useEffect } from "react";
import { getFiltredList } from "../../JS/actions/bPro.action";
const Home = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
      dispatch(getFiltredList());
    }, [dispatch]);
  return (
    <div>
      
      <Container className="dashboard-container">
        {/* <h1 className="dashboard-title">Bonjour {user.name}</h1> */}
        <p className="dashboard-subtitle">
          Bienvenue sur Bricolink — la plateforme pour trouver rapidement un
          professionnel du bâtiment.
        </p>

        {/*  liste des métiers */}
        <Card className="dashboard-main-card">
          <Card.Body>
            <h2>Trouvez le bon artisan pour chaque besoin</h2>
            <p>
              Explorez les différents corps de métier disponibles sur notre
              plateforme
            </p>
            <h2 className="text-center my-4">La liste des professionnels :</h2>
                  {/* <ListProfessional /> */}
                  <ListeValide />
      
          </Card.Body>
        </Card>

        {/* Prestataires disponibles */}
        <Card className="dashboard-main-card">
          <Card.Body>
            <h2>Des professionnels près de chez vous</h2>
            <p>Découvrez des artisans disponibles et prêts à intervenir</p>
          </Card.Body>
        </Card>

        {/* Annonces des prestataires */}
        <Card className="dashboard-main-card">
          <Card.Body>
            <h2>Les dernières annonces de services</h2>
            <p>
              Les prestataires publient régulièrement leurs disponibilités et
              offres
            </p>
          </Card.Body>
        </Card>

        <Card className="dashboard-pro-card">
          <Card.Body>
            <h4>Vous êtes un professionnel ?</h4>
            <p>
              Proposez vos services sur Bricolink et recevez des demandes de
              clients près de chez vous.
            </p>

            <Link to="/Professional">
              <Button variant="outline-primary">Devenir professionnel</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
      <div />
    </div>
  );
};

export default Home;
