import React from "react";

export const Register = () => {
  return (
    <div className="register container">
      <h1>Register</h1>

      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit">Register</button>
      </form>

      <style jsx>{`
        .register {
          min-height: 38vh;
        }
      `}</style>
    </div>
  );
};
