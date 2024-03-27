// we can fetch data by using callbac function, new Promise, async / await
// here we will be using new Promise

//text method returns promise if resolve will return text representation of body
// fetch("index.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//output is hello everyone
// how are you
// 1
// 2

//FETCH API Promise only rejects when we have network error (not in other cases).

// But as per in above code using catch to handle error is not best Way
// Best way to handle error is using ok: true flag

// console.log(fetch("index.txt"));
// fetch("index.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Know to display the renderd data on webpage using the class make in html file

// const result = document.querySelector(".results");
// async function renderData() {
//   try {
//     const response = await fetch("indexm.txt"); //it give the promises and data
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.text(); //here we handle the promise so we write await and convert the data innto text data
//     result.textContent = data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// renderData();

///RENDERING THE JSON FILE

const result = document.querySelector(".results");
async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    console.log(data);
    result.textContent = data.name;
    result.textContent = data.age;
  } catch (error) {
    console.log(error);
  }
}
renderData();
