const main = document.querySelector('main');
let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
let buttons = document.querySelector('button');
fetch(baseUrl).then(function (res) {
    return res.json()
}).then(function (data) {

    let section = ''

    data.forEach(function (data) {
        let { title, body } = data;
        section += `   
    <div>
      <h4>${title}</h4>
      <p>${body.substring(0, 80)}...</p>
      <button>read more</button>
    </div>
    `
        main.innerHTML = section;
        
    });
});

   