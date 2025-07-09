// a unction is a reusable block of code that performs a specific task.

// coding the function, not running it
function hello () {
  console.log("Hello")
  console.log("Hii")
}


hello(); // execution of function -> with this function will run

function sum (a, b) {   // a, b -> parameter -> data that user give to execute the function
  console.log(a + b);
}

sum(4, 5);    // argument -> user give data as the parameter is given
sum(5, 6)


function greet(name) {
  console.log(`Welcome ${name} to our website`)
}

greet("Aman")
greet("Sahil")