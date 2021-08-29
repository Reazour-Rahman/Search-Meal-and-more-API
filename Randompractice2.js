const loadData = () => {
    url = ('https://randomuser.me/api/?results=50')
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data))
}
// loadData();
const getData = data => {
    const results = data.results;
    // console.log(data)
    const div = document.getElementById('div')
    div.style.display = "flex"
    div.style.alignItems = "center"
    for (const user of results) {
        console.log(user)
        div.innerHTML = `
        <div style="background-color: lightBlue; width:400px;border: 1px solid black; border-radius: 10px" class="col">
            <div style=" padding:10px" class="card">
                <img src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">I am ${user.name.first} ${user.name.last} ${user.name.title}</h5>
                    <h5 class="card-title">From : ${user.location.country}, City :  ${user.location.city}</h5>
                    <p class="card-text">Street : ${user.location.street.name}, code :${user.location.street.number}</p>
                    <p class="card-text">latitude : ${user.location.coordinates.latitude}, longitude :${user.location.coordinates.longitude}</p>
                    <p class="card-text">TimeZone :${user.location.timezone.description} and Offset :  ${user.location.timezone.offset}</p>
                </div>
            </div>
        </div>
        `
    }
}