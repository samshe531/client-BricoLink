
// export default NavBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../JS/actions/auth.action";
import { useEffect } from "react";
import { fetchProByUserId } from "../../JS/actions/bPro.action";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth, user } = useSelector((state) => state.authReducer);
  const { pro } = useSelector((state) => state.bProreducer);

 useEffect(() => {
  if (user && user._id) {
    dispatch(fetchProByUserId(user._id));
  }
}, [dispatch ,user]);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">BRICO_LINK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {user && user.isAdmin && <Nav.Link href="/admin">Dashboard</Nav.Link>}

            {isAuth ? (
              <>
                <Nav.Link href="#" onClick={() => dispatch(logout(navigate))}>
                  LogOut
                </Nav.Link>

                {isAuth && pro && pro._id && pro.user ? (
  <Nav.Link href={`/profile/${pro._id}`}>
    {user.name} {user.lastName}
  </Nav.Link>
) : null}
              </>
            ) : (
              <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

