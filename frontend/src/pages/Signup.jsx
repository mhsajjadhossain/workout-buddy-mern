import React from "react";
import SignupForm from "../components/modules/signup/SignupForm";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="row justify-center">
            <div className="col-5">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
