const loadData = () => {
    const url = ('https://jsonplaceholder.typicode.com/comments')
    fetch(url)
    .then(res => res.json())
    .then(data => passData(data))
}
// loadData();
/* const passData = data => {
    const div = document.getElementById('div');
    for (const comment of data) {
        // console.log(comment)
        const p = document.createElement('p');
        p.innerText = `${comment.id}....${comment.name}`;
        div.appendChild(p);
    }
} */
//trying forEach
const passData = data => {
    const div = document.getElementById('div');
    data.forEach(comment => {
        // console.log(comment)
        const p = document.createElement('p');
        p.innerHTML = `
        <div onclick="loadDetails()">
            <h3>ID : ${comment.id} <small> E-mail : ${comment.email}</small></h3>
        </div>
        `;
        div.appendChild(p);
    });
};
// details 
const loadDetails = () => {
    const url = ('https://jsonplaceholder.typicode.com/comments')
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data))
}
const displayMealDetail = comments => {
    // console.log(comments)
    const anotherDiv = document.getElementById('another');
    for (const comment of comments) {
        const p = document.createElement('p');
        p.innerText = `${comment.id}....${comment.name}`;
        anotherDiv.appendChild(p);
    }
}
