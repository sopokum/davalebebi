//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function compare(m, n) {
    if (m == n) {
        return 0
    }
    else {
        return Math.max(m, n)
    }
}
console.log(compare(24, 24))

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function summ(m, n) {
    return m + n
}
console.log(summ(10, 12))

//წერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function fullName() {
    console.log("sopo kumsiashvili")
}
fullName()

//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function saxeligvari(firstname, lastname) {
    return firstname + " " + lastname
}
console.log(saxeligvari("sophio", "kumsiashvili"))

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

function multy(n) {
    let mult = 1;
    if (n >= 0) {
        for (let i = 1; i < n; i++) {
            mult = mult * i;
        }
    }
    else{
        for (let i = -1; i > n; i--) {
            mult = mult * i;
        }
    }
    return mult
}
console.log(multy(-3))


//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

const person1 = {
    firstname: "sopoio",
    lastname: "kumsiashvili",
    score: [4, 7, 5, 3, 2],
    age: 25, 
    fullName: function() {
        this.firstname= "sopio";
        return this.firstname + " " + this.lastname;
    },
}
console.log(person1.fullName())

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function sumGrades(score) {
    let sum= 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i]
    }
    return sum
}
console.log(sumGrades(person1.score))


//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

const student = {
    name: "sopio",
    age: 25, 
    printDetails: function() {
      console.log("Student's name:", this.name);
      console.log("Student's age:", this.age);
    }
  };
  student.printDetails()