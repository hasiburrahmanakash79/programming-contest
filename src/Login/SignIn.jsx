import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const [passShow, setPassShow] = useState(false);

  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //Email password
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 1000,
          title: "Login Successful",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={passShow ? "text" : "password"}
            name="password"
            placeholder="enter your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a className="label-text-alt link link-hover">
              <p onClick={() => setPassShow(!passShow)}>
                <small>
                  {passShow ? <span>Hide Pass</span> : <span>Show Pass</span>}
                </small>
              </p>
            </a>
          </label>
        </div>
        <div className="form-control mt-1">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
      <Link to="/adminRegi">
              Do not have an account?{" "}
              <span className="text-orange-600 font-bold">SignUp</span>{" "}
            </Link>
    </div>
  );
};

export default SignIn;
