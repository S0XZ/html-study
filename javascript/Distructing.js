//Distruct syntax

//distruct object
var voxel = {x: 1, y: 2, z: 3}
const {x: a, y: b, z: c} = voxel
console.log(a)

//distruct nest object
var nestVoxel = {x: {a: 1}}
const {x: {a: firstArg}} = nestVoxel
console.log(firstArg)

//distruct array
var array = [0, 1, 2, 3, 4]
let [p1, p2, ,p4] = array  

const [, , ...arr] = array
console.log(p1, p2, p4)
console.log(arr);

//更换位置。此处不加分号会出错
(() => {
    'use strict';
    [p1, p2] = [p2, p1]
})()
console.log([p1, p2])