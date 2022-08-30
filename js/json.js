function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}
function displayData(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        console.log(li);
        ul.appendChild(li);
        
    }
}