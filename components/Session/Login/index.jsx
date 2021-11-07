import React from "react";

export const Login = () => {
  return (
    <div className="login container">
      <h1>Iniciar Sesion</h1>

      <form action="">
        <div className="form-group">
          <label htmlFor="">Email or Username</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit">Login</button>
      </form>

      <style jsx>{`
        .login {
          min-height: 38vh;
        }
      `}</style>
    </div>
  );
};
