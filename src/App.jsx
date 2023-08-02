import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { CounterContext } from "./contexts/counterContext";


const App = () => {

	const [counter , setCounter] = useState(0);

	return (
		<>
			<CounterContext.Provider value={{ counter , setCounter }}>
				<Header />
				<Main />
			</CounterContext.Provider>
		</>
	);
};

export default App;
