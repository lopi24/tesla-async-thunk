import { Link } from "react-router-dom";
import "./_button.scss";

const Button = (props) => {
  console.log(props);
  return (
    <Link to={props.to} className="ui-button">
      shop now
    </Link>
  );
};

export default Button;
