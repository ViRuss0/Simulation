import NavEl from './NavEl';
const pages = ['bio', 'skills', 'contacts'];

function Header({ updatePageHandler, curPage }) {
	return (
		<header className='w-full p-10 flex justify-between items-center bg-slate-700 text-white'>
			<h1 className='text-3xl text-white italic'>MyLogo</h1>
			<nav className='flex gap-4'>
				{pages.map((page) => (
					<NavEl
						updatePageHandler={updatePageHandler}
						page={page}
						active={curPage === page}
						key={page}
					>
						{page[0].toUpperCase() + page.slice(1)}
					</NavEl>
				))}
			</nav>
		</header>
	);
}

export default Header;
