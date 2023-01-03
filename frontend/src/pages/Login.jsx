import React from "react";
import LoginForm from "../components/modules/login/LoginForm";

const Login = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="row justify-center">
            <div className="col-5">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
