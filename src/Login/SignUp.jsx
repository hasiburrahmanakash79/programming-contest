import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {createUser } = useContext(AuthContext)

  const handleSignUp = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      navigate(from, { replace: true });
      Swal.fire(
        'Registration in Successful',
        'Welcome to our robotWorld',
        'success'
      )
    })
    .catch(error => setError(error.message))
  }
    return (
        <div>
            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
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
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
            <p className="text-red-600">{error}</p>
          </form>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-blue-600 font-bold">LogIn</span>{" "}
            </Link>
          </div>
        </div>
    );
};

export default SignUp;