const apiKey = 'e26e4924ff9842733c5d3f1dec0748e40b60265ee80e6a231b55ad7bd09df5f8';
let donne = document.querySelectorAll('.dropdown-item');
function toConversCrypto(lien){
    fetch(lien)
    .then(response=>response.json())
    .then(data=>{
         console.log('data',data)
        for(const cle in data ){
            document.getElementById('deuxieme').textContent = `${data[cle]} ${cle}`;
        }
    })
}
donne.forEach(item=>{
    item.addEventListener('click', systeme);
})
function systeme(event){
    let elements = event.target.id.split('-');
    const premier = document.getElementById('premier');
    const deuxieme = document.getElementById('deuxieme');
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${elements[0]}&tsyms=${elements[1]}&api_key=${apiKey}`;
    toConversCrypto(url)
    premier.textContent = `1 ${elements[0]}`
}