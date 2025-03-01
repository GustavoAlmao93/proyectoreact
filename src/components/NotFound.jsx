import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
