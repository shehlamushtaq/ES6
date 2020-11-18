

// const multi = (a=2, b=0) =>
// {
//     var c =  a*b

//     return c
// }
// console.log(`Product of 2 numbers : ` + multi(9 , 4))


// const square = (a) => 
// {
//     return a*a
// }

// console.log(`Square of a number =  ` + square(4))


// const nowdate = () =>
// {
//     var c = new Date()
//     var date = c.getDate()
//     var day = c.getMonth()+1
//     var year = c.getFullYear()
//     var full = `Date of Today : 
//     ` + date + " / " + day + " / " + year
//     return full
// }
// console.log(nowdate())


// var arr = [2,4,3]
// const newArr = arr.map((item)=>{
//     return item*item
// })

// console.log(newArr)



// var num1 = [16 , 49 , 81]
// const num2 = num1.map((num)=>{
//     let s = Math.sqrt(num)
//     return s
// })

// console.log( num2)

// var num1 = [shehla, mina , samina]

// const num2 = num1.map((item , index)=>{
//     let s = `${item}` + `${index}`
//     return s
// })

// console.log( num2)
// var teacher = ['Mughal', 'Faiza' , 'Ali']
// var students = ['shehla', 'mina' , 'samina', 'sadia']
// var age = ['42', '24' , '20', '19']
// var newSt = students.forEach((value , index)=> {
//    var b= { Name:value,    age:age[index]}
//    console.log(b)
// })

   
   
// var toFind = "Ali"

// const num1 = teacher.includes(toFind)
// if (num1){
//     var newArr = students.map((item , index)=>{
    
//     var a = {Name: item , 
//               Age: age[index]}
//         return a
//     }

//     )}
// console.log(newArr)



// let salary = 4000;
// var bonus = (salary > 5000)? "Salary is Greatr then (5000) hence bounus = 1000" 
//             :(salary < 5000)? "Salary is less then (5000) hence bounus = 500"
//             :(salary == 5000)? "Salary is Equal to (5000) hence bounus = 100"
//             :'invalid'
// console.log(salary)
// console.log(bonus)



//  var students = ['shehla', 'mina' , 'samina', 'sadia']
//  var look = students.filter((item) => {
// return item == 'mina'     

// })
// console.log(look)

// ==================   spread Operator   ==============================
var s = [1,2,3,4,5,6]
var h = [...s]
h[2] = 708
 console.log(s)
 console.log(h)
 //------------------------------------------------
 var shehla = {Name : 'shehla', age: 42}
 var newobj = {...shehla}
 newobj.gender = "female"
 shehla.subject = "Computer"
 
 console.log(shehla)
 console.log(newobj)
//------------------------------------------------

// var a = ["hiba","is","girl"]
// console.log("a", a)

// const  sum = (a,b,c) => {
//     return a+b+c   
// }
// var b = sum (...a)
// console.log("b   ", b)
//------------------------------------------------
// var sum = (a, ...b) => {
// var num2 = b.reduce((item , index) =>{
//     return item + index
// })
//  num2 = num2+a
//  return num2
// }
// var num3 = sum(2,4,5,6)
// console.log("num3", num3)
//------------------------------------------------
var sub = (a, ...b) => {
var num2 = b.reduce((item , index) =>{
    return item + index
})
 num2 = num2-a
 return num2
}
var subtract = sub(2,4,5,6)
console.log("subtract", subtract)









 
//https://docs.google.com/presentation/d/1scEVd9pD5eqw-0SBRTLwhxB0v2DzfIsWGzDPlVS7eqI/edit#slide=id.p




