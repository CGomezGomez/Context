import { useContext } from 'react';
import { CounterContext } from '../../contexts/counterContext';

const Header = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div>
			<h2>{counter}</h2>
		</div>
	);
};

export default Header;
