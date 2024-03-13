import "./Button.css";

const Button = ({ id, test, action }) => {
  const handleAction = (e) => {
    action(e);
  };

  return (
    <button id={id} onClick={handleAction}>
      {test}
    </button>
  );
};

export default Button;
