import React from 'react';

function Book({ book: { title, author, cover, price } }) {
	return (
		<div className='flex flex-col gap-2 shadow p-4 bg-stone-100 rounded '>
			<h2>
				<span className='font-semibold'>{title}</span>,{' '}
				<span className='italic'>{author}</span>
			</h2>
			<div className='h-56 flex gap-12 items-center'>
				<img className='w-32' src={cover} alt='' />
				<span>Price: {price},00 €</span>
			</div>
		</div>
	);
}

export default Book;
