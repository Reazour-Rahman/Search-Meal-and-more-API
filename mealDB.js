const searchFood =async () =>{
    const inputField = document.getElementById('search-field');
    const searchText = inputField.value;
    inputField.value = '';
    if (searchText == '') {
        const h3 = document.getElementById('validation');
        h3.innerText = 'Please! write something'
        return h3;
    }
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`)
    /* inputField.nodeValue = ''; */
    const res = await fetch(url)
    const data = await res.json()
    loadMeals(data.meals)
    /* or */
    // fetch(url)
    // .then(response => response.json())
    // .then(data => loadMeals(data.meals))
};
const loadMeals = meals => {
    const cardContainer = document.getElementById('card-container');
    if (meals.length == 0) {
        const h3 = document.getElementById('validation');
        h3.innerText = 'Please! write something'
        return h3;
    }
    for (const meal of meals) {
        // console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadDetails('${meal.idMeal}')" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
    }
};
const loadDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    console.log(meal)
    const cardDetails = document.getElementById('card-details')
    cardDetails.textContent = ''
    const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strArea}</p>
                <a href="${meal.strYoutube}">Go To YouTube</a>
            </div>
        </div>
        `
        cardDetails.appendChild(div);
} 