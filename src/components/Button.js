const Button = ({ colour, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: colour }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelBlue"
};

export default Button;
