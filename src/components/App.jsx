import { Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Home from "../routes/Home.jsx";
import Projects from "../routes/Projects.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />;
        <Route path={"/Home"} element={<Home />} />;
        <Route path={"/Projects"} element={<Projects />} />
      </Routes>
    </>
  );
}
