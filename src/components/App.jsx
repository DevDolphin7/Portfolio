import { Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Home from "../routes/Home.jsx";
import Projects from "../routes/Projects.jsx";
import Interests from "../routes/Interests.jsx";
import Contact from "../routes/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />;
        <Route path={"/Home"} element={<Home />} />;
        <Route path={"/Projects"} element={<Projects />} />
        <Route path={"/Interests"} element={<Interests />} />
        <Route path={"/Contact"} element={<Contact />} />
      </Routes>
    </>
  );
}
