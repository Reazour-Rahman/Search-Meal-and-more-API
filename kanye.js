const loadkanye = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => kanyeData(data))
}
loadkanye();
const kanyeData = data => {
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}