let name = 'Hello'

//Object
let person = {
name: "Mike",
age: 23
}

//Method-1 
person.name = "Jack"

//Method-2
let selection = 'Marry'
person['name'] = selection

console.log(person.name)



function printIt(name) {
    console.log(name[name.length - 1])
    return name
}

printIt('PrintIt Excuted')

let emotion = 'Happy'
console.log(emotion)

/*
This 
is 
a 
Fu*king Message
*/

//Array
let myArray = [1, 2, 3]
myArray.push(4)
console.log(myArray)

var newArray = myArray.pop()
console.log(myArray)
console.log(newArray)

console.log(myArray)

myArray.shift() //剪掉第一个
myArray.unshift(1) //加在第一个
myArray.pop() //剪掉最后一个
myArray.push(3) //加在最后一个

console.log(myArray)

//Object
console.log('//Object Test start here.')

let myself = {
name: 'Ar2c',
age: 19,
gender: 'male'
}

console.log(myself.hasOwnProperty('name'))
delete myself.name
console.log(myself.hasOwnProperty('name'))
myself.weight = 65
console.log(myself.weight + 'kg')

let myFamily = [
    {
        name: 'Ar2c',
        age: 19,
        gender: 'male'
    },
    {
        name: 'YaoLi',
        age: 49,
        gender: 'female' 
    }
]

console.log(myFamily[0]['name'])


//While
console.log('//While Study')

var secondArray = []
var index = 0
while(index < 5) {
    secondArray.push(index)
    index++
}
console.log(secondArray)

var thirdArray = []
for (var i = 0; i<5; i++) {
    thirdArray.push(i)
}
console.log(thirdArray)

var fourthArray = []
var index = 0
do {
  fourthArray.push(index)
  index ++
} while (index < 5)
console.log(fourthArray)

console.log(Math.floor(12.9))

//Other
console.log('//Other')

const myArrayI = [0, 1, 2, 3]
let myArrayII
(
() => {
    myArrayII = [...myArrayI]
    myArrayI[0] = 9
}
)()
console.log(myArrayI)
console.log(myArrayII)

