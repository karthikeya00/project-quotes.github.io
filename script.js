function getRandomQuote() {
    const quotes = [
        'The purpose of our lives is to be happy.',
        'Life is what happens when you’re busy making other plans.',
        'Get busy living or get busy dying.',
        'You only live once, but if you do it right, once is enough.',
        'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
        // Add more quotes here
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = quote;
}

document.getElementById('new-quote').addEventListener('click', getRandomQuote);