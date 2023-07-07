import React from 'react';

function NavEl({ children, page, updatePageHandler, active }) {
	let textStyle = active
		? 'text-white border-white font-semibold'
		: 'text-slate-200 border-transparent';
	return (
		<a
			className={`${textStyle} hover:text-white border-b border-transparent hover:border-white py-2 w-20 text-center `}
			onClick={(e) => {
				e.preventDefault();
				updatePageHandler(page);
			}}
			href='#'
		>
			{children}
		</a>
	);
}

export default NavEl;
