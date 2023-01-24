

var plusFunction = (a, b = 1) => {return a+b}
console.log(plusFunction(2, 3))

var sumFunction = (...args) => {return args.reduce((a, b) => a+b, 0)}
console.log(sumFunction(2,3,4,5,6))