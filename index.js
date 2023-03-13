// const {id1,id2} = require('./id')
// console.log('ID1 nano: '+ id1);
// console.log('ID2 nano: '+ id2);
const Sum = require('./components/Sum')
const mul = require('./components/Multiply')
const {minus, MaxMinMinus} = require('./components/Minus')
const MaxMinDiv = require('./components/Divide')
const MinNum = require('./components/MinNum')
const MaxNum = require('./components/MaxNum')
let arr = [1,2,3,4,5,6]
console.log('sum:'+Sum(arr));
console.log('mul:'+mul(arr));
console.log('minus:'+minus(arr));
console.log('MaxMinMinus:'+MaxMinMinus(MaxNum(arr),MinNum(arr)));
console.log('MaxNum'+MaxNum(arr));
console.log('MinNum'+MinNum(arr));
console.log('MaxMinDiv'+MaxMinDiv(MaxNum(arr),MinNum(arr)));

