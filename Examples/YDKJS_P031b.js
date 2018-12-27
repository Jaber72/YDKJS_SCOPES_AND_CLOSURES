var a = 2;

(function IIFE( global ){

  var a = 3;
  console.log( a ); // 3
  console.log(global.a); // 2
})(window);  // this won't work in Node

console.log( a ) // 2