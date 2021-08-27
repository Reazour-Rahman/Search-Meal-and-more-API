const getUser = () =>{
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => loadData(data))
}
getUser();
const loadData = (data) =>{
    console.log(data)
    const random = data.results;
    const div = document.getElementById('random')
    for (const per of random) {
        const p = document.createElement('p');
        p.innerText = `Name : ${per.name.title} ${per.name.first} ${per.name.last} and   E-mail: ${per.email}`;
        div.appendChild(p);
    }
}