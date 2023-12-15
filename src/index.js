import ReactDOM from "react-dom/client";

// npm install bootstrap@5
import "bootstrap/dist/css/bootstrap.css";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div className="container">
        <AppRoutes />
    </div>
);