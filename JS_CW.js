// function f1(p1, p2, p3){
//     let a1 = p1
//     let a2 = p2

//     result_text = "Hello" + p1 + " " + p2
//     console.log(result_text)
//     let message = "Victor, " + p3

//     console.log(a1, a2)
//     console.log(message)

    
//     return result_text
// }

// f1(2,3 'Hello!')

// function f2(name, message){
//     // if (message === undefined){
//     //     message = "Welcome!!"
//     // }
//     message = message || "Welcome!!"
//     return message + ' ' + name
// }
// console.log(f2('Anna', 'Hello!!'))

// function f3(name, message = "Welcome!"){

//     return message + ' ' + name
// }
// console.log(f3("Anna", "Merhaba"))

// function f4(p1, p2){
//     if (p1 > p2){
//         return p1-p2
//     } else if(p1 < p2){
//         return p1+p2
//     } else {
//         return "P1 == P2"
//     }
// }
// console.log(f4(1, 4))



// // ООП (стрелочные функции)
// let fs11 = () => console.log("OK!")
// fs11()


// let fs22 = (p1, p2) => console.log("OK!", p1, p2)
// fs22(30, 40)


// let n1 = 100
// let n2 = 200

// let fs33 = (n1 > n2) ?
//     (p1, p2) => console.log("1_OK!", p1 - p2) :
//     (p1, p2) => console.log("2_OK!", p1 + p2) ;

// fs33(n1,n2)

// function n2(title, fn1){
//     console.log(title, "N2")
//     fn1("Code 200 OK !!!!")
// }
// n2("Test code 200", function(pp1){
//     console.log(pp1)
// })

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(student);
  

