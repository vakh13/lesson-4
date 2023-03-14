// დავალება 1
let array = [5, 25, 89, 120, 36];

array.push("javascript", "python");
 array.unshift("html", "css");
 for (let index in array) {
     console.log(index);
   }
 array.shift()
 array.pop()
 console.log(array);

// დავალება 2
 let fruits = ["ფორთოხალი", "ბანანი", "მსხალი"];
 for (let i in fruits) {
   console.log(i);
 }
 fruits.push("ვაშლი", 'ანანასი');
 fruits.unshift('საზამთრო')
 console.log(fruits);
 fruits.splice(2, 0, 'მანგო')
 console.log(fruits);
 fruits.pop();
 fruits.shift();
 console.log(fruits)

// დავალება 3
 let array = [1, 2, 3, 4, 5];
 array.splice(3, 0, "a", "b", "c");
 console.log(array);

// დავალება 4
 let arr = [1, 2, 3, 4, 5];
 let sum = 0;
 arr.forEach(function (x) {
   sum += x;
 });
 console.log(sum);

// დავალება 5
 for (let i = 100; i > 0; i--){
     console.log(i);
 }