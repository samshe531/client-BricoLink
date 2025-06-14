import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Professional from "./pages/professionals/Professionals";
import Error from "./pages/error/Error";
import NavBar from "./components/navBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/actions/auth.action";
import Loading from "./components/loading/Loading";
import ErrorToast from "./components/error/ErrorToast";
import SuccessToast from "./components/success/successToast";
import ProfessionalForm from "./components/form/Form";
import DashBoard from "./pages/dashBoard/DashBoard";
import ListeEnAttente from "./pages/listeEnAttente/listeEnAttente";
// import Profile from "./pages/professionalProfile/ProfessionalProfile";
import { getProfessionals } from "./JS/actions/bPro.action";
import ProfessionalProfile from "./pages/professionalProfile/ProfessionalProfile";
import UpdateProfessional from "./components/updateProfessional/UpdateProfessional";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const isLoad = useSelector((state) => state.authReducer.isLoad);
  const errors = useSelector((state) => state.authReducer.errors)
  const success = useSelector((state) => state.authReducer.success)
  const user = useSelector((state) => state.authReducer.user );
  // console.log(user)

  // on dispatche le current pour connaiutre la persone authentifier
  useEffect(()=> {

    if (localStorage.getItem("token")){
      dispatch(current())
     
    }
     dispatch(getProfessionals())
  }, [dispatch])
  return (
    <div className="App">
      {/* navBaar */}
      <NavBar />
      {isLoad  && <Loading/>} 
      <ErrorToast errors={errors}/>
      <SuccessToast success={success} />
      <main>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {user.isAdmin && <Route path="/admin" element={<DashBoard />} />}
        { isAuth? (
        <>
        <Route path="/toBePro" element={<ListeEnAttente />} />
        <Route path="/professional" element={<ProfessionalForm />} />
        <Route path="/allProfessionals" element={<Professional />} /> 
        <Route path="/profile/:id" element={<ProfessionalProfile />} />
        <Route path="/pro/update/:id" element={<UpdateProfessional />} />        
        </>) 
        : (
        <>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/professional" element={<Register />} />
        <Route path="/about" element={<About />} />
        </>
        )}
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
 
