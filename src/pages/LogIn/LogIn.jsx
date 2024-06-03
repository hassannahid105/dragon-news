import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  const { singIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(singIn);
  // ? handle
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // ! sing in
    singIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="text-2xl font-bold text-center pt-8">
              <h4>Log In Form</h4>
            </div>
            <form className="card-body" onSubmit={handleLogIn}>
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
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>
                  Don&apos;t have an account. Please &nbsp;
                  <span className="text-blue-400 font-bold text-lg">
                    <Link to="/register">Register</Link>
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

export default LogIn;
