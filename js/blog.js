const body = document.querySelector("body");
const main = document.querySelector("main");
let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
// const buttons = document.querySelectorAll("button");
// const div = document.querySelectorAll("div");
// const h2 = document.querySelectorAll("h2");
// const p = document.getElementsByTagName("p");

fetch(baseUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let section = "";

    data.forEach(function (data) {
      let { title, body } = data;
      section += `   
    <div>
      <h2>${title}</h2>
      <p>${body.substring(0, 80)}...</p>
      <button>read more</button>
    </div>

    
    `;

      main.innerHTML = section;
    });
  });

// div.classList.add("container");
// buttons.classList.add("btn");
// h2.classList.add("heading");
// p.classList.add("para");
// console.log(body);
