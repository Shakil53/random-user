const loadbuddies = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaybuddies(data))
}
loadbuddies()
const displaybuddies = data => {
    const buddies = data.results
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }

}