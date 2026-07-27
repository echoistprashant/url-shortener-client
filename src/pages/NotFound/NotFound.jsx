import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "10px",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 18px",
          backgroundColor: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;