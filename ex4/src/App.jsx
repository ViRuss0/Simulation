import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='bg-stone-200 min-h-screen flex flex-col justify-between items-center'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
