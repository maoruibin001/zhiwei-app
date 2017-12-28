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

obj.__proto__ = kk;

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key)
  }
}