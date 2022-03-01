import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "Logout" });
  };

  const { ...loginInfo } = useSelector((state) => state);
  return (
    <div>
      <p>Welcome, {loginInfo.userName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
