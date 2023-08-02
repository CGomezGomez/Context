import { useContext } from 'react';
import { CounterContext } from '../../contexts/counterContext';
import Button from '../button/Button';

const Main = () => {
	const { counter, setCounter } = useContext(CounterContext);
	return (
		<main>
			<Button counter={counter} setCounter={setCounter} amount={1}></Button>
			<Button counter={counter} setCounter={setCounter} amount={2}></Button>
			<Button counter={counter} setCounter={setCounter} amount={3}></Button>
		</main>
	);
};

export default Main;
