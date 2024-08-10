import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProvideTheme } from "./contexts/Theme";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProvideTheme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProvideTheme>
);
