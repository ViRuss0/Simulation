import React from 'react';

function Experience({ job: { title, description, year } }) {
	return (
		<div className='flex flex-col gap-4 bg-slate-700 text-white rounded p-4'>
			<div className='flex justify-between'>
				<h1 className='font-semibold'>{title}</h1>
				<span className='mr-4'>{year}</span>
			</div>
			<p>{description}</p>
		</div>
	);
}

export default Experience;
