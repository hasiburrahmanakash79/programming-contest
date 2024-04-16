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
            <h1>Admin Home {user?.email}</h1>
            <button className="btn btn-primary" onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Home;