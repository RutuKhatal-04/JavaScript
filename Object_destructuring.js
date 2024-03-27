//In object destructuring order does.nt matter but the name does matter
// here instead of [] we will be using {} other is same

const student = { name: "Aditi", position: "First", rollNo: 20 };
const { name, rollNo } = student;
console.log(name); //Aditi
console.log(rollNo); //20   working according to label given to obejct
const { color, color2 } = student;
console.log(color); //undefined
console.log(color2); //undefined
// why this is giving undefined as it use to work for arrays but not Here
// Bcz in objects it already have the label and here we cannot give one more label to it so thus it shows undefined





// Renaming the lables of the variables

const num = { x: 100, y: 200 };
const { x: num1, y: num2 } = num;
console.log(num1);//100
console.log(num2);//200

// console.log(x);// x is not defined
// console.log(y);//y is not defined bcz we are chnaging the name while destructuring




// Object Desstructuring and rest operator
let { a, b, ...res } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);//100
console.log(b);//200
console.log(res);//{ c: 300, d: 400, e: 500 }






let options = {
    title: "My Menu",
    items: ["item1", "item2"],
};
function showMenu({
    title,width: w=100 , height: h=200,items:[item1,item2]
}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);