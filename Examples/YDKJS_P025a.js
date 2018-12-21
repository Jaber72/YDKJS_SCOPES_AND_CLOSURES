function doSomething (a) {
  b = a + doSomethingElse( a + 2);
  console.log(b *3)
}

function doSomethingElse(a) {
  return a  - 1;
}

var b;
doSomething( 2 ); // 15
// how not to do this not hiding scope with another function
