const myArray = [1, 2, 3, 4, 5]

for (const nums of myArray) {
    console.log(nums);
}

const greetings = "Hello World"

for (const greet of greetings) {
    if(greet == ' '){
        continue
    }
    console.log(greet);
}

///////////////////////////////////////Maps//////////////////////////////////////////

const country = new Map()

country.set("IN", "India")
country.set("USA", "United States of America")
country.set("NZ", "New Zealand")

console.log(country);

for (const [code, name] of country) {
    console.log(`${code} : ${name}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const Two = "Hello world!"
for (const greet of Two) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }