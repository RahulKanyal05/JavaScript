/*
(function Name(){
    console.log(`Hi Welcome to js world`);
})();

((userName) => {
    console.log(`${userName}, welcome to the js world`);
})('Rahul')

*/

//////////////////////////////////////////////////////////////////////////////////////////
//Global scope se koi dikkat na aye , isliye imidiate invoke function expression ka use kiya jata h

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Rahul')
