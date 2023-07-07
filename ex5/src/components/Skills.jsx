import Skill from './Skill';
const skillsData = [
	'HTML5',
	'CSS3',
	'Tailwind',
	'React',
	'JavaScript',
	'TypeScript',
	'Node',
];

function Skills() {
	return (
		<div className='flex gap-10 flex-wrap items-center justify-center p-10'>
			{skillsData.map((skill, i) => (
				<Skill key={i} skill={skill} />
			))}
		</div>
	);
}

export default Skills;
