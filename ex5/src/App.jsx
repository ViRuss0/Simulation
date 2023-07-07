import { useState } from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

function App() {
	const [page, setPage] = useState('bio');
	const updatePageHandler = (page) => setPage(page);
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-slate-100 text-slate-800'>
			<Header curPage={page} updatePageHandler={updatePageHandler} />
			<div className='flex max-w-7xl items-center justify-center p-10 flex-grow'>
				{page === 'bio' && <Bio />}
				{page === 'skills' && <Skills />}
				{page === 'contacts' && <Contacts />}
			</div>

			<Footer />
		</div>
	);
}

export default App;
