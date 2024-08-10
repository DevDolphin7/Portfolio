import { Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Home from "../routes/Home.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/Home"} element={<Home />} />;
      </Routes>
    </>
  );
}
