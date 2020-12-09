var a = 5;
var b = 7;
console.log('after a swap: ', a, b);

var temp = a;
var a = b;
var b = temp;
//console.log('before a swap : a =', a,'b =', b);

var x = 5;
var y = 7;
var x = x + y;
var y = x - y;
var x = x - y;
//console.log('before swap : x =', x, 'y', y);

var p = 5;
var q = 7;
var [p, q] = [q, p];
console.log('before swap : p =', p, 'q', q);

