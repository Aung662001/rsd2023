import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
