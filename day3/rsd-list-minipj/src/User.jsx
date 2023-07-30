import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <b>{name}</b>
      <br></br>
      <a href="#/" onClick={() => navigate("/")}>
        &laquo;Go Back
      </a>
    </div>
  );
};

export default User;
