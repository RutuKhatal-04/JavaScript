console.log(document); //#document
console.dir(document); //this gives all the files andd fetures  &  properties

//If i wan to get and head part then
console.log(document.head); //<head>...</head> here all part of head of code is seen
console.log(document.title); //document
console.log(document.body);
console.log(document.documentURI); //http://127.0.0.1:5500/index1.html

// ********************************* DOM SELECTORS ************************************

//1.getElementByTagName
// css -> .selector{
//     propery:value
// }
// h1{}

//js =   document.getElementByTagName("elementname/h1");
//2.getElementById
// css -> #nameId{}
// js = document.getElementById("id-1");
//3.getElementByClassName
// css- > .className{}
//js =   document.getElementByClassName("");
//4.querySelector
// document.querySelector("h1");
//5.querySelectorAll

// ******************************************************************************
console.log(document.getElementsByTagName("h1")); //HTMLCollection(10) [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1]
console.log(document.getElementsByTagName("h1").length); //10
console.log(document.getElementById("id-1")); //<h4 class="cls-1" id="id-1">query Selector</h4>
console.log(document.getElementById("main")); //h2#main
console.log(document.getElementsByClassName("cls")); // HTMLCollection [h3.cls] 0 : h3.cls length : 1 [[Prototype]] : HTMLCollection
console.log(document.querySelector("h1")); //by tagnaem
console.log(document.querySelector("#id-1")); //by id use '#'<h4 class="cls-1" id="id-1">query Selector</h4>
console.log(document.querySelector(".cls")); //by classname use '.'<h3 class="cls">query Selector all</h3>
//Here if many of the elemenst have same class then in output it will show of only the 1st elemenst not of all and to get of all the elements use another selector called as "querySelectorAll".
//if the provided class is not available or the symbol like . or # is not added before the name then it give the value as null in console
console.log(document.querySelectorAll(".cls")); //NodeList(9) [h3.cls, h3.cls, h3.cls, h3.cls, h3.cls, h3.cls, h3.cls, h3.cls, h3.cls]
// 0 : h3.cls 1 : h3.cls 2 : h3.cls 3 : h3.cls 4 : h3.cls 5 : h3.cls 6 : h3.cls 7 : h3.cls 8 : h3.cls length : 9 [[Prototype]] :NodeList

// ***********************************Storing data in variable *********************************
const apple = document.getElementsByTagName("li");
console.log(apple); //app.js:45 HTMLCollection(4) [li, li, li, li]

//***********************************How to get inner text inner html**************************

//innnerText
//textContent
//innerHtml

// (innerText)
const p = document.querySelector("p");
// console.log(p.innerText); //it just give simple pure text without any formatting add by us in html file

// console.log(p.textContent); // here we get only the content not the elements like script tag or strong tag in html file

// console.log(p.innerHTML); //here we get all tag along with content just same like written in html file

// const h1 = document.querySelector("h2");
// h1.innerText = "Met Bkc"; //change the hello world to Met Bkc
// h1.innerHTML = "<em>123</em>"; //123

// ******************************  PROPERTIES   *************************************************
//classlist
//add()
//remove()
//toggle()

const h5 = document.querySelector("h5");
// console.log(h5.classList); //DOMTokenList(5) ['one', 'tow', 'three', 'four', 'five', value: 'one tow three four f // check from index2.html

// h5.classList.add("style"); // add this class to list of the class for that element
// console.log(h5.classList);
// h5.classList.remove("style");
// console.log(h5.classList);

// h1.classList.toggle("style");
// here if class is not there for that element then it add that class to that element and if it is there then it removes it .check it in developer tool elements

// ****************  All About Attributes **************************
//href
//value
//type
//getAttribute(Name)
//setAAttribute(attrName,value)

const a = document.querySelector("a");
// console.log(a.href); //https://facebook.com/(index1.html)

// console.log((a.href = "www.youtube.com")); //chnages the value
const input = document.querySelector("input");
// console.log(input.value); //hello if valeu is ther if not given then blank
// console.log  (input.type); //text

//Setting Attributes
// a.href = "https://www.youtube.com/@huxnwebdev"; //afte r clicking facebook on the webpage it redirect to this above website
// console.log((input.value = "Hello")); //it show hello in the text field
// console.log((input.type = "password")); //***
// console.log((input.placeholder = "type your password"));

// *********************** getAttribute(attrName)***********
// console.log(input.getAttribute("type")); //text
// console.log(input.getAttribute("placeholder")); //type your password

// **************************    setAttribute(attrName,value)     *************************

// console.log(input.setAttribute("placeholder", "password"));

// *******************************   SIBLINGS    *******************************************
//index4.html
let firstLi = document.querySelector("li");
console.log(firstLi); //give li but only 1st one
// console.log(firstLi.parentElement); //give the ul block code  which contains all li
// console.log(firstLi.parentElement.parentElement); //body

let body = document.querySelector("body");
let ul = document.querySelector("ul");
console.log(body.children);
// console.log(body.children.children);
// console.log(ul.children[0]); //<li>1<li>

// console.log(ul.children[2]); //<li>2<li>
// console.log(ul.children[3]); //<li>3<li>

// console.log(ul.children[4]); //undefined
// console.log((ul.children[0].innerText = "one")); //one 2 3 4

// let firstLi1 = document.querySelector("li");
// console.log(firstLi1.nextElementSibling.textContent); //2
// console.log(firstLi1.nextElementSibling.nextElementSibling.textContent); //3

// let fourthli = document.querySelector(".fourth");
// console.log(fourthli.previousElementSibling.textContent); //3
// console.log(fourthli.previousElementSibling.previousElementSibling.textContent); //2

// *******************************     STYLING USING JS     ****************************

// const h1 = document.querySelector("h1");
// console.log(h1);<h1>helloworld</h1>
// console.log(h1.style); //shows all type of css styling

// h1.style.color = "teal"; //changes the color
// h1.style.backgroundColor = "crimson";

// ********************CREATING ELEMENTS AND APPENDING TO THE DOM**************************

// (index4.html)

//Creating Element

// const a1 = document.createElement("a");
// console.log(a1); //<a></a>
// const p1 = document.createElement("p");
// p1.textContent = "Heellllooo";

// console.log(p1.textContent); //Heellllooo
// p1.classList.add("greeting");
// console.log(p1.classList);

//Append class method
const p1 = document.createElement("p1");
const body1 = document.bodyl;
p1.textContent = "Hello World";
p1.classList.add("greetings");

body.appendChild(p1); //this will push the newly created in the body and it will always append at the bottom of the list
//Now we will se the hellow world after hello people in the browser

const ul1 = document.querySelector("li");
const newLi = document.createElement("li");
newLi.innerText = "I m li tag";
// ul.appendChild(newLi);

const firstlii = document.querySelector("li");
//selector insertBefore(what where)
// ul.insertBefore(newLi, firstlii);

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I m italics";
i.style.color = "skyblue";
// firstP.insertAdjacentElement(where,what);
firstP.insertAdjacentElement("beforebegin", i); //it will place befoe the para means above the line of para starts
firstP.insertAdjacentElement("afterbegin", i); // in the line of para at starting
firstP.insertAdjacentElement("beforeend", i); //at the end of para
firstP.insertAdjacentElement("afterend", i); //one line below the end of the para

let section = document.querySelector("section");
const i1 = document.querySelector("i");
i1.innerText = "adaf";
i1.style.color = "skyblue";

const span = document.createElement("span");
span.innerText = "ABCDEFGHIJKL";
// span.style.color = "crimson";
// section.append(i1, span); //hello people i m italics ABCDEFGHIJKL
// section.prepend(i1, span); // i m italics ABCDEFGHIJKL hello people

//REMOVE CHILD()   REMOVE()

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
// newList.removeChild(fourth); //removes this child
// newList.remove(); //removes all

// *************************EVENTS AND EVENT HANDLING ******************************************
//INDEX6.HTML

// some part is doen in html file
//suggestion never to use inline way

//Bad Way
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Huxn Web dev");
};

//great way
// const best = document.querySelector(".best");
// best.addEventListener("click", function () {
//   console.log("Hello best click");
// });
// or
// function greetings() {
//   console.log("Hello best click");
// }
// const best = document.querySelector(".best");
// best.addEventListener("click", greetings);

//oR IF WE ARE USING ERROR FUCNTION
const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("Blue"));

//Event Object

const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
  console.log(event);
}); //gives info about particular event as we are  using click event so gives info about click event

const form = document.querySelector("form");
const input1 = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //this bcz when we click submit it refresh out browser and output in console also so it is the default way of this event so to prevent it this method is used
  console.log(input1.value);
});
//Instead of event we can write e

// ************************ Keyboard Events *************************************************
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// const input = document.querySelector("input");

// input.addEventListener("keypress", function () {
//   console.log("Key pressed");
// });

// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });

// input.addEventListener("keydown", function () {
//   console.log("Keydown");
// });

// ------- USEFULL PROPERTIES AND METHODS -------
// input.addEventListener("keypress", (e) => {
//   console.log(e.charCode);
//   console.log(e.code);
//   console.log(e.ctrlKey); // hit ctr + q
//   console.log(e.key);
//   console.log(e.shiftKey); // shift + t
// });


