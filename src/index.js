const app = {
	quotes: [],
	getNewRandomQuote() {
		const length = this.quotes.length;
		const randomIndex = Math.floor(Math.random() * length);
		return this.quotes[randomIndex];
	},
	changeQuoteUi() {
		const p = document.querySelector('blockquote > p');
		const cite = document.querySelector('blockquote cite');
		if (app.quotes) {
			const randomQuote = this.getNewRandomQuote();
			p.innerText = randomQuote.text;
			cite.innerText = randomQuote.author;
		}
	},
};
document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btn-new');
	btn.addEventListener('click', () => {
		if (app.quotes) {
			app.changeQuoteUi();
		} else {
			getRandomQuote();
		}
	});
	getRandomQuote();
});

function getRandomQuote() {
	const headers = new Headers();
	const url = 'https://type.fit/api/quotes';
	headers.append('accept', 'application/json');
	const request = new Request(url, {
		headers,
		method: 'GET',
	});
	fetch(request)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			console.log(response.status);
			throw new Error('Error Requesting the server');
		})
		.then(result => {
			app.quotes = result;
			app.changeQuoteUi();
		})
		.catch(err => {
			console.error(err);
		});
}
