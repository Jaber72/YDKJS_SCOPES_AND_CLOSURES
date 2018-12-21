function foo(str, a) {
  eval( str); // this executes the string as if it was code.
  console.log( a,b );
}

var b=2;

foo("var b = 3", 1); // 1, 3