const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=> loadCountries(data))
}
getCountries();
const loadCountries = data => {
    const div = document.getElementById('div')
    data.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('UI')
        countryDiv.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button onclick="loadCountryByNAme('${country.name}')">Details</button>
        `
        div.appendChild(countryDiv)
    });
}
const loadCountryByNAme = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadCountryDetails(data[0]))
}
const loadCountryDetails = country =>{
    const section = document.getElementById('sec');
    section.innerHTML = `
        <h2>Country : ${country.name}</h2>
        <h6>Population : ${country.population}</h6>
        <img width="300px" src="${country.flag}">
    `
}