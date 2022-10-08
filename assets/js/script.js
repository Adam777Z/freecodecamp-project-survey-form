const projectName = 'survey-form';
localStorage.setItem('example_project', 'Survey Form');

document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelector('#survey-form').addEventListener('submit', (event2) => {
		event2.preventDefault();
		alert('Unavailable.');
	});
});