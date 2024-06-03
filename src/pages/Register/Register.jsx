import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  //   ! handle function
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, photo, name);
    // create user
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="text-2xl font-bold text-center pt-8">
              <h4>Register Form</h4>
            </div>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="phoroUrl"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>
                  Already have an account. Please &nbsp;
                  <span className="text-blue-400 font-bold text-lg">
                    <Link to="/login">Log IN</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
