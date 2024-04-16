import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };
  console.log(user?.email);
  return (
    <div>
      <div className="flex justify-between border-b-2 pb-3 items-center">
        <h1 className="text-3xl font-bold text-primary">Admin Home</h1>
        <button className="btn btn-primary" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Gender</th>
              <th>Division</th>
              <th>District</th>
              <th>Upazila</th>
              <th>Institute Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Hasibur Rahman Akash</td>
              <td>hasiburrahmanakash79@gmail.com</td>
              <td>0188237723</td>
              <td>Male</td>
              <td>Mymensingh</td>
              <td>Jamalpur</td>
              <td>Jamalpur Sadar</td>
              <td>Computer Services LTD.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
