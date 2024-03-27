// const btn = document.querySelector(".btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) {
//         new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.id);
//       console.log(data.title);
//       console.log(data.body);
//     });
// }

///know to display data on webpage

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) {
//         new Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       document.querySelector(".id").innerHTML = data.id;
//       document.querySelector(".title").innerHTML = data.title;
//       document.querySelector(".body").innerHTML = data.body;
//     });
// }

// know to fetch all data instead of only 1st one
const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) {
        new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      let output = document.querySelector(".all-post");
      data.forEach((element) => {
        output.innerHTML += ` <div>(ID): ${element.id}</div>
         <div>(TITLE): ${element.title}</div>
        <div>(BODY): ${element.body}</div>`;
      });
    });
}
