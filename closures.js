//Function() is a function CONSTRUCTOR. You can create anonymous functions dynamicly
addFunction = Function("a", "b", "return a + b");
value = addFunction(5, 9);
console.log("value=" + value);

//DECLARED functions are saved and invoked later : function name(){}
function declaredFunction(inp) {
  let a;
  if (typeof inp == "number") a = inp;
  return a;
}
x0 = declaredFunction(78); //x0 = 78
x0 = declaredFunction(); //x0 = undefined. no persistance
console.log("x0=" + x0);

//function EXPRESSIONS are anonymous functions assigned to var and invoked later : y = funct(){}
//y is the name and the function
expressionFunction = function (inp) {
  let a = 9;
  if (typeof inp == "number") a = inp;
  return a;
};
x0 = expressionFunction(8); //x = 8
console.log("x0=" + x0);
x1 = expressionFunction(); //x1 = 9 no persistance
console.log("x1=" + x1);

// () aroumd an Anonymous Function or a DECLARED Function creates a FUNCTION-OBJECT
functionObject = (function(){
  a=9;
});

//SELF-INVOKING Functions are function EXPRESSIONS or FUNCTION-OBJECTS followed by () and execute automatically
// a = function(){h=8;}(); or (function(){h=8;})()
x3 = (function () {
  return 9;
})();
console.log("x3=" + x3); // x3 = 9 as the function ran

//NESTED function are enclosing functions with internal functions and the internal function can be accessed only if it was returned by enclosing function
function outerFunction(){
  let inner_data= 99; 
  function InnerFunction(){
    return inner_data
  }; 
  return InnerFunction; //return the function not the inner_data
}
assignInnerFunction = outerFunction();
outputInnerFunction = assignInnerFunction();
console.log("outputInnerFunction=" + outputInnerFunction);

//CLOSURE uses SELF-INVOKING function EXPRESSIONS or SELF-INVOKING FUNCTION-OBJECTS with NESTED functions to keep the inner state (variables) of the enclosing function persistant
//since this SELF-INVOKING function EXPRESSION returns a function, we have a closure
//the returning function is attached to a global variable which keeps the enclosing function and it's variables persitant also. It is like the returned function is jaming it's foot in the door. The term closure to me seems wrong. It is more like an opener.
let closureFunction = (function () {
  let a = 9;
  return function (inp) {
    if (typeof inp == "number") a = inp;
    return a;
  };
})();
x4 = closureFunction(); // x4 = 9
console.log("x4=" + x4);
x5 = closureFunction(8); // x5 = 8
console.log("x5=" + x5);
x6 = closureFunction(); // x6 = 8
console.log("x6=" + x6);

//even a Declared Functin can contain a closure
//since it is not a SELF-INVOKING Function it only contains a closure after it is called
function outer(x) { 
  var x;
    return function inner(y) {
        return x + y;
    };
}
const addFive = outer(5);
console.log(addFive(3));
console.log(addFive(3));

//closure with SELF-INVOKING function EXPRESSIONS
//normally any nested functions in our closure can only be run from within the enclosing function
//but by returning an object containing functions, we can do this
//our closure is returning an OBJECT, not a function. The object contains two functions that we can use like OOP methods
let outer_with_methods = (function () {
  let inner_data = 99;
  let inner_obj = {
    set: function (val) {
      inner_data = val;
    },
    get: function () {
      return inner_data;
    }
  };
  return inner_obj;
})();
outer_with_methods.set(6);
whatisit = outer_with_methods.get(); //6
console.log("whatisit="+whatisit);

//fake JS closure. poor man's OOP
//closure 'like'. No it is not a closure, and is not the same.
//just an object with a function (method) and some data
//careful as the data and methods can be changed anywhere from your code.
var fake_function_persistant_states = {
  state: 8,
  set: function (input) {
    this.state = input;
  },
  get: function () {
    return this.state;
  }
};
fake_function_persistant_states.set(92);
val = fake_function_persistant_states.get(); //92
console.log("val="+val);
