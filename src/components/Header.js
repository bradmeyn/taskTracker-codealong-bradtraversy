// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title} </h1>
      <Button colour="green" text="Hello" onClick={onClick} />
    </header>
  );
};

//set a defauly prop
Header.defaultProps = {
  title: "Task Tracker"
};

// Header.propTypes = {
//   title: PropTypes.string
// };

export default Header;
