import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const nagivate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Gustavo Ortiz");
    nagivate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
