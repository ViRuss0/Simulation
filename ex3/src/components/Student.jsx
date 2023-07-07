import React from 'react';

function Student({ student }) {
	return (
		<div
			className={`flex w-64 rounded shadow-lg flex-col gap-3 p-4 bg-blue-300 ${
				student.gender === 'f' && 'bg-pink-300'
			}`}
		>
			<h1>
				ID: {student.id} Name: {student.fullname}
			</h1>
			<p>Media voto: {student.avg}</p>
		</div>
	);
}

export default Student;
