document.addEventListener('DOMContentLoaded', () => {
	getRandomQuote();
});

function getRandomQuote() {
	const headers = new Headers();
	const url = 'https://quotes.rest/qod';
	headers.append('accept', 'application/json');
	const request = new Request(url, {
		headers,
		method: 'GET',
	});
	fetch(request)
		.then(response => {
			if (response.ok) {
				return response.text();
			}
			console.log(response.status);
			throw new Error('Error Requesting the server');
		})
		.then(result => {
			createQuote(result);
		})
		.catch(err => {
			console.error(err);
		});
}
