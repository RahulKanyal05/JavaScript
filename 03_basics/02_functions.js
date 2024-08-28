function calculatePrice(...num1){
    return num1
} 

const result = calculatePrice(1000,211,2222)
console.log(result);


const user ={
    name: "Rahul",
    email: "rahul@gmail.com"
}

// function employee(newUser){
//     console.log(`My name is ${newUser.name} and my mail id is ${newUser.email}`)
// }

// employee(user)

function employee(newUser){
    return `${newUser.name},`
}

const userName = employee(user)
console.log("My name is ",userName);
