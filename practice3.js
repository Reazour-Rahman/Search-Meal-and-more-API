const loadData = () => {
    const url = ('https://jsonplaceholder.typicode.com/comments')
    fetch(url)
    .then(res => res.json())
    .then(data => passData(data))
}
loadData();
const passData = data => {
    const div = document.getElementById('div');
    for (const comment of data) {
        const p = document.createElement('p');
        p.innerText = `${comment.id}....${comment.name}`;
        div.appendChild(p);
    }
}