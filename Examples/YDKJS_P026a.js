function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;

  b = a + doSomethingElse  (a * 2)
  console.log ( b * 3 );
}

doSomething ( 2 ); // 15 
// B and doSomethingElse are not exposed to any influence outside of doSomething