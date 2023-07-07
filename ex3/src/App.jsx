import { useState } from 'react';
import Student from './components/Student';
import SearchStudent from './components/SearchStudent';

const studentsData = [
	{ id: 1, fullname: 'mario rossi', avg: 6, gender: 'm' },
	{ id: 2, fullname: 'luigi verdi', avg: 4, gender: 'm' },
	{ id: 3, fullname: 'peach pink', avg: 8, gender: 'f' },
	{ id: 4, fullname: 'wario rossi', avg: 9, gender: 'm' },
	{ id: 5, fullname: 'daisy princess', avg: 10, gender: 'f' },
];

function App() {
	const [students, setStudents] = useState(studentsData);
	const searchStudentHandler = (searchTerm) => {
		setStudents(
			studentsData.filter((stud) => stud.fullname.includes(searchTerm))
		);
	};
	return (
		<main className='bg-slate-100 h-screen flex gap-16 items-start justify-center p-20'>
			<div className='flex flex-col gap-6 items-center justify-center'>
				{students.length > 0 ? (
					students.map((student) => (
						<Student key={student.id} student={student} />
					))
				) : (
					<div>Nessuno studente con questo nome</div>
				)}
			</div>
			<SearchStudent searchStudentHandler={searchStudentHandler} />
		</main>
	);
}

export default App;
