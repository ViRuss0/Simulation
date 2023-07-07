import React from 'react';
import { useState } from 'react';

function SearchStudent({ searchStudentHandler }) {
	const [searchIpt, setSearchIpt] = useState('');

	return (
		<form
			className='p-10 flex flex-col gap-10 items-center justify-center bg-slate-700 rounded shadow'
			onSubmit={(e) => {
				e.preventDefault();
				searchStudentHandler(searchIpt);
			}}
		>
			<input
				className='border border-slate-300 p-2 rounded-full outline-none text-center shadow'
				type='text'
				minLength={2}
				value={searchIpt}
				onChange={(e) => setSearchIpt(e.target.value)}
				placeholder='Insert search term'
			/>
			<button className='bg-slate-100 text-slate-700 uppercase py-3 px-6 rounded-full hover:bg-slate-300 '>
				Search
			</button>
		</form>
	);
}

export default SearchStudent;
