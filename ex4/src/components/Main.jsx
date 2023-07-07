import { useState } from 'react';
import Book from './Book';

const data = [
	{
		title: 'Harry Potter e la pietra filosofale',
		author: 'Rowling',
		price: 20,
		cover:
			'https://m.media-amazon.com/images/I/813azBbGnnL._AC_UF1000,1000_QL80_.jpg',
	},
	{
		title: 'Harry Potter e il calice di fuoco',
		author: 'Rowling',
		price: 25,
		cover: 'https://www.ibs.it/images/9788831003858_0_536_0_75.jpg',
	},
	{
		title: 'Harry Potter e la camera dei segreti',
		author: 'Rowling',
		price: 15,
		cover:
			'https://m.media-amazon.com/images/I/71CUTxwwt6L._AC_UF1000,1000_QL80_.jpg',
	},
	{
		title: 'La coscienza di Zeno',
		author: 'Italo Svevo',
		price: 12,
		cover: 'https://www.lafeltrinelli.it/images/9788807900495_0_536_0_75.jpg',
	},
	{
		title: 'HTML, CSS, JS',
		author: 'Mario Rossi',
		price: 32,
		cover: 'https://copertine.hoepli.it/hoepli/xxl/978/8820/9788820385255.jpg',
	},
	{
		title: 'HTML, CSS, JS',
		author: 'Pedro Pascal',
		price: 41,
		cover:
			'https://webgenio.com/wp-content/uploads/2017/01/libros-html5-css3-5.jpg',
	},
	{
		title: 'JS for JS',
		author: 'Pedro Pascal',
		price: 22,
		cover: 'https://copertine.hoepli.it/hoepli/xxl/978/8820/9788820391348.jpg',
	},
	{
		title: 'PRO web developer',
		author: 'Riccardo Degni',
		price: 29,
		cover:
			'https://m.media-amazon.com/images/I/61KFsWmOLjL._AC_UF1000,1000_QL80_.jpg',
	},
];

function Main() {
	const [filteredBooks, setFilteredBooks] = useState();
	const [iptAuth, setIptAuth] = useState('');
	const [iptTitle, setIptTitle] = useState('');

	const searchBookHandler = (auth, title) => {
		console.log(auth.length);
		setFilteredBooks(
			data.filter(
				(book) =>
					(auth.length > 1 &&
						book.author.toLowerCase().includes(auth.toLowerCase())) ||
					(title.length > 1 &&
						book.title.toLowerCase().includes(title.toLowerCase()))
			)
		);
	};
	return (
		<div className='flex h-full flex-col flex-grow justify-start p-10 gap-20'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					searchBookHandler(iptAuth, iptTitle);
				}}
				className='flex gap-6 items-center justify-center '
			>
				<input
					className='border border-stone-200 p-3 rounded-full text-center outline-none shadow'
					value={iptAuth}
					onChange={(e) => setIptAuth(e.target.value)}
					type='text'
					minLength={2}
					placeholder='Insert author'
				/>
				<input
					className='border border-stone-200 p-3 rounded-full text-center outline-none shadow'
					value={iptTitle}
					onChange={(e) => setIptTitle(e.target.value)}
					type='text'
					minLength={2}
					placeholder='Insert title'
				/>

				<button className='bg-stone-800 text-stone-100 py-3 px-6 rounded-full hover:bg-stone-600 tranistion-all'>
					Search
				</button>
			</form>

			<div className='flex flex-wrap gap-20 items-center justify-center'>
				{filteredBooks &&
					filteredBooks.map((book, i) => <Book key={i} book={book} />)}
			</div>
		</div>
	);
}

export default Main;
