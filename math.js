 // 1 შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და 
// დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


function sum (...numbers){
    let sumofnumbers=0
    for (let item of numbers){
        if (item>0) {
            sumofnumbers += item;
        }
    }
    return sumofnumbers
}

let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);


// 2 ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9


function sum(...numbers){
    let sumofn=0
    for (let item of numbers){
        sumofn += item
    }
    console.log(sumofn);
}

sum(10, 50, 6, 7, 8, 11, 6, 3, 9)


// 3 //   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
//   თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
      
 
function whoisloggedin() {
    if (user.isloggedin == true){
        console.log(user.firstname + " " + user.lastname);
    } else {
        console.log (false);
    }
}
let result = whoisloggedin();
console.log(whoisloggedin);

// 4 შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getmaxnumber(...numbers){
    let maxnumber=0;
    for (let item of numbers) {
        if (item>maxnumber){
            maxnumber=item;
        }
    }

    return maxnumber
}

let result = getmaxnumber(5,9,20,100,889,36,1);
console.log(result);


// 5. მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
// გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

let array = [1,2,4,10,34,5,7,87]

for (let item of array){
    if (item>0 && item<10){
        console.log(item);
    }
}


// 6 მოცემულია მასივი Let numbers =[1,2,3,4,5,6,7,8,9,10] ციკლის საშუალებით შეამოწმეთ, 
// თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let item of numbers) {
    if (item == 5) {
        break;
    }
    console.log(item);
}
// except 5

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let item of numbers) {
    if (item == 5) {
        continue;
    }
    console.log(item);
}