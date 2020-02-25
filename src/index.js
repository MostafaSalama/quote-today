document.addEventListener('DOMContentLoaded', () => {});

function getRandomQuote() {
	const headers = new Headers();
	const url = 'https://quotes.rest/quote/random';
	headers.append('accept', 'application/json');
	const request = new Request({
		headers,
        method:'GET',
        url,
	});
}
