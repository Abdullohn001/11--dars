// 1- masala
//let numbers = [3,4,5,6,7,];
//let number = numbers.reverse();
//console.log(number);


//2-masala
// == bu faqat qiymatlarni taqqoslaydi 
// === bu esa typ larni ham solishtiradi 

// if(10 == "10"){
//     console.log(true);
// } else{
//     console.log(false)
// }
// if (10 === "10") {
//   console.log(true);
// } else{
//     console.log(false)
// }

//3-masala
// let son = prompt("son kiriting");
// let array = [];
// function recursive(s) {
//   array.unshift(son);
//   son--;
//   if (1 <= son) {
//     recursive();
//   }
//   return array;
// }
// console.log(recursive());


//4-masala
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let toqSonlar = sonlar.filter((son) => son % 2 !== 0);
// let juftSonlar = sonlar.filter((son) => son % 2 === 0);
// let toqSonlarYigindisi = toqSonlar.reduce((yigindi, son) => yigindi + son);
// let juftSonlarYigindisi = juftSonlar.reduce((yigindi, son) => yigindi + son);
// console.log("Toq sonlar yig'indisi:", toqSonlarYigindisi);
// console.log("Juft sonlar yig'indisi:", juftSonlarYigindisi);


//5 - masala
// let inputString = "Hello! World!! How are you?!".split('!').join('');
// console.log(inputString); 

//6- masala
// let raqam = [5,4,6,3];
// let raqam2 = [6,8,9];
// const yigindi = raqam.concat(raqam2).reduce((acc, curVal) => (acc+=curVal));
// console.log(yigindi)


//7- masala
// function make (word){
//     let made = word.split("")
//     made.pop()
//     made.shift()
//     return made.join("")
// }
// console.log(make("hello worlds"))

// 8 - masala 
// const array = [1,2,3,4,5];
// let rever = array.sort((a,b) => (b - a));
// console.log(rever)
// 8 - masala 2- usul
// const array = [1, 2, 3, 4, 5];
// const newarr = [];
// array.forEach((item) => newarr.unshift(item));
// console.log(newarr)

//9-masala

