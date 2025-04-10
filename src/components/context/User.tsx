import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const user = useContext(UserContext)

    const handleLogin = () => {
      user.setUser({
        name: "Santhosh",
        email: "santhosh@example.com"
      })
    }

    const handleLogout = () => {
      user.setUser(null)
    }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.user?.name}</div>
      <div>User name is {user.user?.email}</div>
    </>
  );
};

export default User;
