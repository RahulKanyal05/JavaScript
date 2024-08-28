/*
const jsUser = {
    name: "Rahul",
    age: 18,
    email: "rahul@gmail.com"
}

console.log(jsUser.name);
jsUser.greeting = function(){
    console.log("Hello world")
}

jsUser.greetingTwo = function(){
    console.log(`Hello world ${this.name}`)
}

console.log(jsUser.greetingTwo());

*/

//*****************************************************************//

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rahul",
    "full name": "Rahul Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser)

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Rahul@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());