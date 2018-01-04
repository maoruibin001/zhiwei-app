/**
 * Created by lenovo on 2017/12/28.
 */
// function foo(name, age) {
//   this.name = name;
//   this.age = name;
// }
//
//
// function kk() {
//   var obj  = {};
//   obj.__proto__ = foo.prototype;
//   foo.apply(obj, arguments);
//   return obj;
// }
// console.log(kk(30, 20));

var obj = {
  name: 20
}

var kk = {
  age: 30
}
var ke = {
  tt: 23
}
obj.__proto__ = kk;
obj.__proto__.__proto__ = null

for (let key in obj) {
    console.log(key)
}

console.log(Object.keys(obj))