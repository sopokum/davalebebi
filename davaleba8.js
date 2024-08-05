//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for (let i = 2; i < 8; i++) {
    console.log(i);
    
}

//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

for (let i = 5; i < 36; i += 4) {
    console.log(i);
    
}

//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
let m = 1;
for (let i = 3; i < 8; i++) {
    m = m * i;
    
}
console.log(m)

//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

const person = {
    firstName: "sopo",
    lastName: "kumsiashvili",
    age: 33,
  }
console.log(person.firstName, person.lastName)


//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
console.log(person.age)
console.log(person.firstName)
console.log(person.lastName)

//6.  დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.

const fruits = ["Apple","Banana", "Orange"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits)

//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი

let s = 0;
for (let i = 1; i < 34; i++) {
    s += i;
    
}
console.log(s)