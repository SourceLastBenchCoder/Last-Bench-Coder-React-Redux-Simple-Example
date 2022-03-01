import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const initialData = {
    userName: "",
    password: ""
  };

  const [user, setUser] = useState(initialData);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();

  const submitLogin = (e) => {
    e.preventDefault();
    alert(user.userName);
    dispatch({ type: "Login", userName: user.userName });
  };

  return (
    <div>
      <h1>Last Bench Coder Login</h1>
      <form onSubmit={submitLogin}>
        <label>User Id:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          required
          id="userName"
          name="userName"
          onChange={handleInput}
          value={user.userName}
        />
        <br /> <br />
        <label>Password:</label>
        &nbsp;
        <input
          type="password"
          required
          id="password"
          onChange={handleInput}
          name="password"
          value={user.password}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
