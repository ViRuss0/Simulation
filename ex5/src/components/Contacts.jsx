import React from 'react';

function Contacts() {
	return (
		<div className='flex flex-col items-center justify-center gap-10'>
			<h2 className='text-lg'>
				Please don&apos;t hesitate to contact me for any further information
			</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert('Thanks!');
				}}
				className='flex flex-col gap-4 items-center justify-center'
			>
				<input
					placeholder='Insert your email address'
					className='rounded outline-none border border-slate-300 p-3 w-full'
					type='email'
				/>
				<textarea
					className='rounded p-3 outline-none'
					name=''
					id=''
					cols='60'
					rows='10'
				></textarea>
				<button className='bg-slate-700 hover:bg-slate-500 text-white py-3 px-6 rounded-full w-32'>
					Send
				</button>
			</form>
		</div>
	);
}

export default Contacts;
