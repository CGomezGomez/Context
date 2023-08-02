
const Button = ({counter  , setCounter , amount }) => {
  return (

    <Button onClick = {() => setCounter(counter + amount)}>
        Incrementar en {amount} el contador.
    </Button>

  );
};

export default Button;
