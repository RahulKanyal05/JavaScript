/*

const one = {
    userName: "Rahul",
    price: 999,

    printMessage: function () {
        console.log(`${this.userName} ,Welcome to the JS world!!!`);
    }
}

one.printMessage()
one.userName = "Sam"
one.printMessage()

const sumTwoNumbers = (nums1, nums2) => {
    return nums1+nums2
}
console.log(sumTwoNumbers(2,3));

const subtractTwoNumbers = (nums1, nums2) => nums1 - nums2
console.log(subtractTwoNumbers(5,2));

*/

//////////////////////////////////////////////////////////////////////////////////////////

const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rahul"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Rahul"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Rahul"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Rahul"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()