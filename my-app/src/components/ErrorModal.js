import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>{props.message}</div>
      <footer>
        <Button onClick={props.onError}>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
