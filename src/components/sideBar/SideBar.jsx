import React from "react";
import { Nav } from "react-bootstrap";
import './sideBar.css'; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.authReducer.user);
    const navigate = useNavigate();
    if (!user?.isAdmin) return null;
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="dashboard" className="flex-column">

        <Nav.Link eventKey="dashboard" onClick={() => navigate("/admin")}>
        Utilisateurs
        </Nav.Link>
        <Nav.Link eventKey="users" onClick={() => navigate("/allProfessionals")}>
          Professionnels
        </Nav.Link>
        <Nav.Link eventKey="settings" onClick={() => navigate("/toBePro")}>
          Demandes Pro
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

